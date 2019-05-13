# Angular Dynamic Component Loading

Demoyu Çalıştırma:

**Docker Kullanarak**
docker-compose dosyasının bulunduğu klasörde "docker-compose up" diyerek başlatıyoruz. İmajlar indikten sonra http://localhost:1991/index.html adresine giderek uygulamayı açıyoruz.

docker içerisindeki ui projesi nginx reverse proxy kullanarak /api çağrılarını .net core web api uygulamasına yönlendiriyor.

**Docker Kullanmadan**
1. .Net core uygulamasını başlattıktan sonra uygulama http://localhost:5001 ve http://localhost:5000 adreslerinde başlıyor.
Menü tanımlarını getiren servis adresi: http://localhost:5001/api/menu
2. Angular uygulamasını başlattıktan sonra http://localhost:4200 adresine giderek başlatıyoruz. Angular uygulamasında kullanılan api adresleri ui/app/src/environments/environment.prod.ts ve ui/app/src/environments/environment.ts dosyaları içersinde tutuluyor.
.Net core uygulamasında Cors açık olduğu için angular ın web api ye yaptığı çağrılarda hata alınmıyor.

Angular uygulamasını prod modda çalıştırmak için  "npm install -g http-server" ile http server kurup sonrasında "ng build --prod" komutu sonrası oluşan "dist/alternatifbank" klasörüne giderek komut satırında "http-server" yazıp server ı başlatıyoruz. sonrasında 
http://localhost:8080/index.html adresine giderek uygulamayı başlatıyoruz.

Not : docker kullanmadan prod modda çalıştırırken "ui/app/src/environments/environment.prod.ts" dosyasındaki apiUrl adresini güncellemek gerekiyor. docker içersinde reverse-proxy için "/api" olarak verdim. Bu adresi "http://localhost:5001/api" olarak güncellemek gerekiyor.
