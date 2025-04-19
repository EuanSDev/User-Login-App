const Section = ({ children }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}
export default Section