"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Yeh hook function bana diya jo error handle karega
const useErrorHandler = () => {
    const router = useRouter();

    const GoToLogin = () => {
        router.push("/admin/login");
    };

    const handleToast = (errorMessage, description) => {
        toast.error(errorMessage, { description });
    };

    const handleError = (error) => {
        const { message } = error;

        switch (true) {
            // JWT Token Errors
            case message.includes("jwt expired"):
                handleToast("Session expired!", "Please log in again to continue.");
                GoToLogin();
                console.error(message);
                break;

            case message.includes("jwt malformed"):
                handleToast("Invalid token!", "It seems like the token is corrupted. Try logging in.");
                GoToLogin();
                console.error(message);
                break;

            case message.includes("invalid token"):
                handleToast("Token is not valid!", "Please re-authenticate yourself.");
                GoToLogin();
                console.error(message);
                break;

            case message.includes("invalid signature"):
                handleToast("Invalid signature!", "Please re-authenticate yourself.");
                GoToLogin();
                console.error(message);
                break;

            case message.includes("Unauthorized Token"):
                handleToast("Unauthorized Token", "Please re-authenticate yourself.");
                GoToLogin();
                console.error(message);
                break;

            case message.includes("Token not provided"):
                handleToast("Token not provided", "Please re-authenticate yourself.");
                GoToLogin();
                console.error(message);
                break;

            // Network Errors
            case message.includes("Network Error"):
                handleToast("Network connection lost!", "Check your internet connection and try again.");
                console.error(message);
                break;

            case message.includes("timeout"):
                handleToast("Request timed out!", "The request took too long. Please try again later.");
                console.error(message);
                break;

            // Custom Errors (Yeh tumhari nai errors hain)
            case message.includes("User not registered"):
                handleToast("User not registered", "The user needs to register before logging in.");
                console.error(message);
                break;

            case message.includes("Password is required"):
                handleToast("Password is required", "Please provide a password to continue.");
                console.error(message);
                break;

            case message.includes("Invalid credentials"):
                handleToast("Invalid credentials", "The username or password is incorrect.");
                console.error(message);
                break;

            case message.includes("ID or new username not found"):
                handleToast("ID or Username not found", "Please check the details and try again.");
                console.error(message);
                break;

            case message.includes("Invalid User ID"):
                handleToast("Invalid User ID", "The provided User ID is invalid.");
                console.error(message);
                break;

            case message.includes("User not found in the database"):
                handleToast("User not found", "No user exists with the given details.");
                console.error(message);
                break;

            case message.includes("User ID not found"):
                handleToast("User ID not found", "No user exists with the given ID.");
                console.error(message);
                break;

            case message.includes("Invalid or missing blog identifier"):
                handleToast("Invalid or missing Blog ID", "Please provide a valid blog identifier.");
                console.error(message);
                break;

            case message.includes("Blog not found"):
                handleToast("Blog not found", "The requested blog could not be located.");
                console.error(message);
                break;

            case message.includes("Invalid or missing user ID"):
                handleToast("Invalid or missing User ID", "The user ID is missing or invalid.");
                console.error(message);
                break;

            case message.includes("Invalid or missing blog ID"):
                handleToast("Invalid or missing Blog ID", "The blog ID is missing or invalid.");
                console.error(message);
                break;

            case message.includes("Invalid status value"):
                handleToast("Invalid status value", "The status value provided is incorrect.");
                console.error(message);
                break;

            case message.includes("User not found"):
                handleToast("User not found", "The user does not exist.");
                console.error(message);
                break;

            case message.includes("Title is required"):
                handleToast("Title is required", "Please provide a title for the blog.");
                console.error(message);
                break;

            case message.includes("Description is required"):
                handleToast("Description is required", "Please provide a description for the blog.");
                console.error(message);
                break;

            case message.includes("Content is required"):
                handleToast("Content is required", "Please provide content for the blog.");
                console.error(message);
                break;

            case message.includes("Image is required"):
                handleToast("Image is required", "Please upload an image.");
                console.error(message);
                break;

            case message.includes("Invalid or missing category ID"):
                handleToast("Invalid or missing category ID", "Please provide a valid category ID.");
                console.error(message);
                break;

            case message.includes("Category not found"):
                handleToast("Category not found", "The selected category does not exist.");
                console.error(message);
                break;

            case message.includes("Blog title already exists"):
                handleToast("Blog title already exists", "Please choose a unique blog title.");
                console.error(message);
                break;

            case message.includes("Category not found or does not belong to the user"):
                handleToast("Invalid category", "The category does not exist or belongs to another user.");
                console.error(message);
                break;

            case message.includes("Thumb image is required"):
                handleToast("Thumbnail image is required", "Please upload a thumbnail image.");
                console.error(message);
                break;

            case message.includes("Category title already exists"):
                handleToast("Category title already exists", "Please choose a unique category title.");
                console.error(message);
                break;
            
            case message.includes("connect EHOSTUNREACH"):
                handleToast("No internet connection", "Please check your internet connection and try again.");
                console.error(message);
                break;

            case message.includes("ECONNRESET"):
                handleToast("No internet connection", "Please check your internet connection and try again.");
                console.error(message);
                break;

            case message.includes("ENOTFOUND"):
                handleToast("No internet connection", "Please check your internet connection and try again.");
                console.error(message);
                break;

            // Other Errors
            default:
                handleToast(message || "Unexpected error!", "Something went wrong. Please try again.");
                console.error(message);
                break;
        }
    };

    return handleError;  // Return the error handler function
};

export default useErrorHandler;
