import { NextResponse } from 'next/server';

/**
 * Error handling middleware
 * @param {Error} error - Error object
 * @returns {NextResponse} Error response
 */
export function errorHandler(error) {
  console.error('Error:', error);

  // Handle validation errors
  if (error.name === 'ValidationError') {
    const errors = Object.values(error.errors).map(err => err.message);
    return NextResponse.json(
      {
        success: false,
        error: errors.join(', ')
      },
      { status: 400 }
    );
  }

  // Handle duplicate key errors
  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern)[0];
    return NextResponse.json(
      {
        success: false,
        error: `${field} already exists`
      },
      { status: 400 }
    );
  }

  // Handle JWT errors
  if (error.name === 'JsonWebTokenError') {
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid token'
      },
      { status: 401 }
    );
  }

  if (error.name === 'TokenExpiredError') {
    return NextResponse.json(
      {
        success: false,
        error: 'Token expired'
      },
      { status: 401 }
    );
  }

  // Handle file upload errors
  if (error.name === 'MulterError') {
    return NextResponse.json(
      {
        success: false,
        error: 'File upload error: ' + error.message
      },
      { status: 400 }
    );
  }

  // Handle database connection errors
  if (error.name === 'MongoError' || error.name === 'MongoServerError') {
    return NextResponse.json(
      {
        success: false,
        error: 'Database error'
      },
      { status: 500 }
    );
  }

  // Handle other errors
  return NextResponse.json(
    {
      success: false,
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    },
    { status: 500 }
  );
} 