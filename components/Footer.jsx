import Link from 'next/link'
import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container-xl py-5">
        <div className="row g-4">
          {/* ---------------- Column 1 ---------------- */}
          <div className="col-md-4">
            <h5 className="mb-3">{site.name}</h5>
            <p className="mb-2">ที่อยู่: {site.address}</p>
            <p className="mb-2">โทร: {site.phone}</p>
            <p className="mb-2">อีเมล: {site.email}</p>
            <p className="mb-2 small text-secondary">
              นิติบุคคล: {site.companyName} • ทะเบียน: {site.companyRegNo}
            </p>
          </div>

          {/* ---------------- Column 2 ---------------- */}
          <div className="col-md-4">
            <h6 className="mb-3">ลิงก์สำคัญ</h6>
            <ul className="list-unstyled">
              <li><Link href="/about" className="text-decoration-none text-light">เกี่ยวกับเรา</Link></li>
              <li><Link href="/contact" className="text-decoration-none text-light">ติดต่อเรา</Link></li>
              <li><Link href="/products" className="text-decoration-none text-light">สินค้า</Link></li>
              <li><Link href="/sitemap.xml" className="text-decoration-none text-light">Sitemap</Link></li>
            </ul>
          </div>

          {/* ---------------- Column 3 ---------------- */}
          <div className="col-md-4">
            <h6 className="mb-3">ความโปร่งใส</h6>
            <ul className="list-unstyled">
              <li><Link href="/policies/privacy" className="text-decoration-none text-light">Privacy Policy</Link></li>
              <li><Link href="/policies/terms" className="text-decoration-none text-light">Terms of Service</Link></li>
              <li><Link href="/policies/refund" className="text-decoration-none text-light">Refund Policy</Link></li>
              <li><Link href="/policies/shipping" className="text-decoration-none text-light">Shipping & Payment</Link></li>
              <li><Link href="/policies/warranty" className="text-decoration-none text-light">Warranty</Link></li>
            </ul>
          </div>

          {/* ---------------- Map Section ---------------- */}
          <div className="col-12 mt-4">
            <h6 className="mb-3">📍 ที่อยู่ ห้างหุ้นส่วนจำกัด พีจีโมบาย
                            183 หมู่ที่ 1 คำตากล้า คำตากล้า สกลนคร</h6>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7135193748177!2d103.75253857579403!3d17.84930379394235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313b46730192a8db%3A0x16b1a55ebb46d34a!2z4LiB4Lij4Liw4LiV4Li14Lih4Lij4LmM4Lit4Liy4Lih4Lir4Lih4Li44LmC4Lih4LiI4Lij4Li04Lia4Lij4Lix4LiX4LiH4Lir4LiB4Lij4Lij4LmA4Lij4Lix4LiV4Li04LiK4Li04LiZ4Liy4LiZ4LiE!5e0!3m2!1sth!2sth!4v1730000000000!5m2!1sth!2sth"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-4 pt-3 small text-secondary">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
