import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Lock, Mail, ShoppingBag, MessageCircle } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc] text-[#1a1a1a]">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center text-[#5563f6] font-bold text-xl gap-2">
          <div className="bg-[#5563f6] text-white p-1 rounded-md">
            <ShoppingBag className="w-5 h-5" />
          </div>
          무신사
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="hover:underline text-gray-700">Log in</a>
          <Button className="bg-[#5563f6] hover:bg-[#4552d6] text-white px-6 rounded">Sign up</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <Card className="w-full max-w-[400px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-gray-100 bg-white">
          <CardHeader className="text-center pb-2 pt-8">
            <div className="flex justify-center mb-4">
              <div className="bg-[#5563f6] text-white p-2.5 rounded-xl shadow-sm">
                <ShoppingBag className="w-7 h-7" />
              </div>
            </div>
            <CardTitle className="text-[#5563f6] font-bold text-2xl mb-1 tracking-tight">무신사</CardTitle>
            <h2 className="text-xl font-bold mt-3 tracking-tight">다시 만나서 반가워요</h2>
            <CardDescription className="text-[13px] text-gray-500 mt-1.5 font-medium">
              계정에 로그인하여 쇼핑을 계속하세요
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 pt-4 px-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[13px] font-bold text-gray-800">이메일</Label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-2.5 h-[18px] w-[18px] text-gray-400" />
                <Input id="email" placeholder="name@example.com" className="pl-10 h-11 text-[13px] border-gray-200 focus-visible:ring-[#5563f6] focus-visible:ring-1 transition-all rounded-md" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-[13px] font-bold text-gray-800">비밀번호</Label>
                <a href="#" className="text-[11px] text-gray-500 font-medium hover:underline">비밀번호 찾기</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-2.5 h-[18px] w-[18px] text-gray-400" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10 h-11 text-[13px] border-gray-200 focus-visible:ring-[#5563f6] focus-visible:ring-1 transition-all rounded-md text-gray-600 pb-1" />
              </div>
            </div>

            <Button className="w-full bg-[#5563f6] hover:bg-[#4552d6] text-white font-medium text-[14px] h-11 mt-4 rounded-md shadow-sm transition-all pb-0.5">
              로그인
            </Button>

            <div className="relative my-6 px-4">
              <div className="absolute inset-0 flex items-center">
                <Separator className="bg-gray-100" />
              </div>
              <div className="relative flex justify-center text-[11px] font-medium text-gray-400">
                <span className="bg-white px-3">또는</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <Button variant="outline" className="w-full text-[13px] font-semibold h-11 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md">
                <MessageCircle className="w-4 h-4 text-yellow-500 mr-2 mb-0.5 fill-yellow-500" /> 카카오 로그인
              </Button>
              <Button variant="outline" className="w-full text-[13px] font-semibold h-11 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md">
                <div className="w-4 h-4 bg-green-500 text-white rounded-[2px] flex items-center justify-center font-black text-[10px] mr-2">N</div> 네이버 로그인
              </Button>
              <Button variant="outline" className="w-full text-[13px] font-semibold h-11 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg> 구글 로그인
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-gray-100 py-5 bg-[#fafafa]/50 rounded-b-xl">
            <p className="text-[12px] text-gray-500 font-medium">
              계정이 없으신가요? <a href="#" className="text-[#5563f6] font-bold hover:underline ml-1">회원가입</a>
            </p>
          </CardFooter>
        </Card>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] font-medium text-gray-400 tracking-wide">
          <div className="w-[5px] h-[5px] bg-green-400 rounded-full shadow-[0_0_4px_rgba(74,222,128,0.5)]"></div>
          보안 서버 연결됨 개인정보 암호화
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="space-y-4">
              <div className="flex items-center text-[#5563f6] font-bold text-xl gap-2">
                <div className="border-[1.5px] border-[#5563f6] p-1.5 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-[#5563f6] stroke-[2.5]" />
                </div>
                ShopFlow
              </div>
              <p className="text-[13px] text-gray-500 max-w-[220px] leading-[1.6]">
                Elevating your shopping experience with clean design and seamless navigation.
              </p>
              <div className="flex items-center gap-4 text-gray-700 pt-2">
                <svg className="w-[16px] h-[16px] cursor-pointer hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067A13.995 13.995 0 007.548 21c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                </svg>
                <svg className="w-[16px] h-[16px] cursor-pointer hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                <svg className="w-[16px] h-[16px] cursor-pointer hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <svg className="w-[16px] h-[16px] cursor-pointer hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[14px] text-gray-900 mb-5">Shop</h3>
              <ul className="space-y-3.5 text-[13px] text-gray-500 font-medium">
                <li><a href="#" className="hover:text-black transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Featured Items</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Discounts</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[14px] text-gray-900 mb-5">Support</h3>
              <ul className="space-y-3.5 text-[13px] text-gray-500 font-medium">
                <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[14px] text-gray-900 mb-5">Legal</h3>
              <ul className="space-y-3.5 text-[13px] text-gray-500 font-medium">
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-6 text-center text-[12px] text-gray-400 font-medium tracking-wide">
            © 2026 ShopFlow Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
