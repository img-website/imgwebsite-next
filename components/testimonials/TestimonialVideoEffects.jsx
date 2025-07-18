'use client'
import { useEffect } from 'react'

export default function TestimonialVideoEffects() {
  useEffect(() => {
    const videos = document.querySelectorAll('.review-video')
    const videoContainers = document.querySelectorAll('.videoContainer')
    const playButtons = document.querySelectorAll('.playBtn')
    const soundButtons = document.querySelectorAll('.soundBtn')

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    let lastPlayingVideo = null
    let isSoundEnabled = false

    const enableDesktopHover = () => {
      videoContainers.forEach((container, index) => {
        const video = videos[index]
        const playButton = playButtons[index]

        container.addEventListener('mouseenter', async () => {
          videos.forEach((v, i) => {
            if (v !== video) {
              v.pause()
              playButtons[i].style.display = 'block'
            }
          })

          try {
            video.muted = true
            video.playsInline = true
            await video.play()
            playButton.style.display = 'none'
            lastPlayingVideo = video
          } catch (err) {
            console.warn('Video play failed:', err.message)
          }
        })

        container.addEventListener('mouseleave', () => {
          video.pause()
          playButton.style.display = 'block'
        })
      })
    }

    const handleDesktopSoundButton = () => {
      soundButtons.forEach((soundButton) => {
        soundButton.addEventListener('click', () => {
          isSoundEnabled = !isSoundEnabled
          videos.forEach((video) => {
            video.muted = !isSoundEnabled
          })

          soundButtons.forEach((btn) => {
            btn.classList.toggle('unmuted', isSoundEnabled)
            btn.classList.toggle('muted', !isSoundEnabled)
          })
        })
      })
    }

    const enableMobileClick = () => {
      playButtons.forEach((playButton, index) => {
        const video = videos[index]

        playButton.addEventListener('click', () => {
          videos.forEach((v, i) => {
            if (v !== video) {
              v.pause()
              playButtons[i].style.display = 'block'
            }
          })

          if (video.paused) {
            video.play()
            playButton.style.display = 'none'
            video.muted = false
            lastPlayingVideo = video
          }
        })

        video.addEventListener('click', () => {
          if (!video.paused) {
            video.pause()
            playButton.style.display = 'block'
            lastPlayingVideo = null
          }
        })

        video.addEventListener('ended', () => {
          playButton.style.display = 'block'
          lastPlayingVideo = null
        })
      })

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          videos.forEach((video, index) => {
            if (!video.paused) {
              video.pause()
              playButtons[index].style.display = 'block'
              lastPlayingVideo = video
            }
          })
        } else if (lastPlayingVideo) {
          lastPlayingVideo.play()
          const index = Array.from(videos).indexOf(lastPlayingVideo)
          if (index !== -1) {
            playButtons[index].style.display = 'none'
          }
        }
      })
    }

    if (isMobile) {
      enableMobileClick()
    } else {
      enableDesktopHover()
      handleDesktopSoundButton()
    }
  }, [])

  return null
}
