import { useRouter } from "next/router";
import { getHostnameDataOrDefault } from "@/lib/db";
import type { UserData } from "@/lib/db";
import { useEffect, useState } from "react";

export default function Site() {
  const router = useRouter();
  const { site } = router.query;
  const [user, setUser] = useState<UserData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getHostnameDataOrDefault(site as string);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (site) {
      fetchData();
    }
  }, [site]);

  return (
    <div className="container mx-auto text-black">
      <h1 className="text-2xl font-bold py-8 text-center">User Table</h1>
      <div className="flex justify-center">
        <div className="overflow-hidden border border-collapse rounded-lg">
          <table className="min-w-full">
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">
                  {user && (
                    <div className="flex items-center ">
                      <div className="mr-4">
                        <img
                          src={user.photoUrl}
                          alt={user.name}
                          className="w-24 h-24 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold py-2 px-4 border-b">{user.subname}</p>
                        <p className="font-bold py-2 px-4 border-b">
                          Phone: {user.phoneNumber}
                        </p>
                        <p className="font-bold py-2 px-4 border-b">
                          Email: {user.email}
                        </p>
                        <p className="font-bold py-2 px-4">
                          Message: {user.message}
                        </p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
