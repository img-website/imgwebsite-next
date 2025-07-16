import ContactUs from "@/components/ContactUs";
import getDynamicMeta from "@/helpers/getDynamicMeta";

export async function generateMetadata() {
    return await getDynamicMeta("/contact-us.php");
}

export default function Page() {
    return (
        <ContactUs defaultType="Fantasy Cricket App Development" />
    );
}
