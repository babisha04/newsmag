import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  title = title || "No Title"; // Assign default value if title is undefined
  description = description || "News is the information from north, east, west, and south"; // Assign default description if not provided

  return (
    <div 
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" 
      style={{ maxWidth: "345px" }}
    >
      <img 
        src={src || image} 
        style={{ height: "200px", width: "330px", objectFit: "cover" }} 
        className="card-img-top" 
        alt={title.slice(0, 20)} 
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description.slice(0, 90)}
        </p>
        <a href={url || "#"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
