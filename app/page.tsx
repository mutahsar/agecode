import Link from "next/link";
import { FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4" dir="rtl">
              لوحة التحكم المرئية لبناء المواقع
            </h1>
            <p className="text-xl text-gray-600 mb-8" dir="rtl">
              أنشئ مواقع ويب احترافية باستخدام محرر مرئي متقدم مع إمكانيات السحب والإفلات
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <FileText className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2" dir="rtl">محرر مرئي متقدم</h3>
              <p className="text-gray-600" dir="rtl">
                واجهة سحب وإفلات سهلة الاستخدام لإنشاء الصفحات والمكونات
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="w-8 h-8 bg-green-600 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-white font-bold">DB</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" dir="rtl">ربط قواعد البيانات</h3>
              <p className="text-gray-600" dir="rtl">
                اتصال ديناميكي بقواعد البيانات المختلفة مع واجهة استعلامات مرئية
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="w-8 h-8 bg-purple-600 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-white font-bold">Σ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" dir="rtl">عمليات حسابية متقدمة</h3>
              <p className="text-gray-600" dir="rtl">
                محرك عمليات حسابية قوي مع دوال محاسبية جاهزة
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="w-8 h-8 bg-orange-600 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-white font-bold">API</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" dir="rtl">تكامل مع الخدمات</h3>
              <p className="text-gray-600" dir="rtl">
                ربط سهل مع واجهات برمجية خارجية وخدمات الويب
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/editor">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                ابدأ البناء الآن
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
              شاهد العرض التوضيحي
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 mb-4" dir="rtl">مبني على تقنيات حديثة</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="px-4 py-2 bg-white rounded-full shadow">Next.js 14+</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">React Flow</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">Zustand</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">Prisma</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">Tailwind CSS</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">Math.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
