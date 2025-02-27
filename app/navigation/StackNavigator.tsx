import { Stack } from "expo-router";

const screens = [
  { name: "index", title: "Splash" },
  { name: "welcome", title: "Welcome" },
  { name: "registration", title: "Registration" },
  { name: "login", title: "Login" },
  { name: "forgotpassword", title: "Forgot Password" },
  { name: "verifyotp", title: "Verify OTP" },
  { name: "changepassword", title: "Change Password" },
  { name: "success", title: "Success Page" },
  { name: "profile", title: "Profile" },
  { name: "HomePage", title: "Home" },
  { name: "productoptions", title: "Product Options" },
  { name: "products", title: "Products" },
  { name: "rosterbuilder", title: "Roster Builder" },
  { name: "paymentIntegration", title: "Payment Integration" },
  { name: "orderConfirmation", title: "Order Confirmation" },
  { name: "ApplyCoupon", title: "Apply Coupon" },
  { name: "Cart", title: "Cart" },
  { name: "ShoppingAddress", title: "Shopping Address" },
  { name: "OrderDetails", title: "Order Details" },
];

export default function StackNavigator() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {screens.map(({ name, title }) => (
        <Stack.Screen
          key={name}
          name={name}
          options={{ title, headerShown: false }}
        />
      ))}
    </Stack>
  );
}
