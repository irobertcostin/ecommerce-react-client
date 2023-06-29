





export default function UserInfo({ user }) {


    return (
        <>
            <div className="w-full border p-4">
                <p>Name: {user.user.full_name}</p>
                <p>E-mail address: {user.user.email}</p>
                <p>Customer ID: {user.user.customerId}</p>
            </div>
        </>
    )
}