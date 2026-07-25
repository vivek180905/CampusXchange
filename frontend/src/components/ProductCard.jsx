import { Link } from "react-router";
import { MessageCircleIcon, IndianRupeeIcon } from "lucide-react";

const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

const ProductCard = ({ product }) => {
  const isNew = new Date(product.createdAt) > oneWeekAgo;

  return (
    <Link
      to={`/product/${product.id}`}
      className={`card bg-base-300 hover:bg-base-200 transition-colors relative ${product.isSold ? "opacity-70" : ""}`}
    >
      {/* SOLD overlay badge */}
      {product.isSold && (
        <div className="absolute top-2 right-2 z-10">
          <span className="badge badge-error font-bold text-white">SOLD</span>
        </div>
      )}

      <figure className="px-4 pt-4 relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className={`rounded-xl h-40 w-full object-cover ${product.isSold ? "grayscale" : ""}`}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-base">
          {product.title}
          {isNew && !product.isSold && <span className="badge badge-secondary badge-sm">NEW</span>}
        </h2>

        {/* Price */}
        {product.price != null && (
          <div className="flex items-center gap-1 text-primary font-bold text-lg">
            <IndianRupeeIcon className="size-4" />
            {product.price.toLocaleString("en-IN")}
          </div>
        )}

        <p className="text-sm text-base-content/70 line-clamp-2">{product.description}</p>

        <div className="divider my-1"></div>

        <div className="flex items-center justify-between">
          {product.user && (
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-6 rounded-full ring-1 ring-primary">
                  <img src={product.user.imageUrl} alt={product.user.name} />
                </div>
              </div>
              <span className="text-xs text-base-content/60">{product.user.name}</span>
            </div>
          )}
          {product.comments && (
            <div className="flex items-center gap-1 text-base-content/50">
              <MessageCircleIcon className="size-3" />
              <span className="text-xs">{product.comments.length}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;