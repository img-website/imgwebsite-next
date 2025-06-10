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
        // If error is a string, show it directly
        if (typeof error === 'string') {
            handleToast("Error", error);
            return;
        }

        const { error: message, status } = error;

        // Handle common HTTP errors
        if (status) {
            switch (status) {
                case 400:
                    handleToast("Validation Error", message || "Please check your input");
                    return;
                case 401:
                    handleToast("Unauthorized", "Please log in again");
                    GoToLogin();
                    return;
                case 403:
                    handleToast("Forbidden", "You don't have permission to perform this action");
                    return;
                case 404:
                    handleToast("Not Found", message || "Resource not found");
                    return;
                case 429:
                    handleToast("Too Many Requests", "Please try again later");
                    return;
                case 500:
                    handleToast("Server Error", "Something went wrong on our end");
                    return;
            }
        }

        switch (true) {
            // JWT Token Errors
            case message?.includes("jwt expired"):
                handleToast("Session expired!", "Please log in again to continue.");
                GoToLogin();
                console.error(message);
                break;

            case message?.includes("jwt malformed"):
                handleToast("Invalid token!", "It seems like the token is corrupted. Try logging in.");
                GoToLogin();
                console.error(message);
                break;

            case message?.includes("invalid token"):
                handleToast("Token is not valid!", "Please re-authenticate yourself.");
                GoToLogin();
                console.error(message);
                break;

            case message?.includes("invalid signature"):
                handleToast("Invalid signature!", "Please re-authenticate yourself.");
                GoToLogin();
                console.error(message);
                break;

            case message?.includes("Unauthorized Token"):
                handleToast("Unauthorized Token", "Please re-authenticate yourself.");
                GoToLogin();
                console.error(message);
                break;

            // Registration specific errors
            case message?.includes("already exists"):
                handleToast("Registration Failed", message);
                break;

            case message?.includes("validation failed"):
                handleToast("Validation Error", message);
                break;

            case message?.includes("Invalid email or password"):
                handleToast("Login Failed", "Invalid email or password. Please check your credentials.");
                break;
            
            case message?.includes("Admin with this email already exists"):
                handleToast("Registration Failed", "Admin with this email already exists. Please use a different email.");
                break;

            // Other Errors
            default:
                handleToast(
                    "Error",
                    message || "An unexpected error occurred"
                );
                console.error(error);
        }
    };


    return handleError;  // Return the error handler function
};

export default useErrorHandler;
