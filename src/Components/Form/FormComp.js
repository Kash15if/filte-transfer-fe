import "./Form.css"



const Form = () => {
    return ( <div class="form-container">
        <h2>Create New Card</h2>
        <form id="cardForm">
            <div class="form-group">
                <label for="fileUpload">Upload Image:</label>
                <input type="file" id="fileUpload" name="fileUpload" accept="image/*" required/>
            </div>
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required/>
            </div>
            <div class="form-group">
                <label for="topic">Topic:</label>
                <input type="text" id="topic" name="topic" required/>
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="tags">Tags:</label>
                <input type="text" id="tags" name="tags" placeholder="Add multiple tags separated by commas"/>
            </div>
            <div class="form-buttons">
                <button type="submit">Save</button>
                <button type="button" onclick="cancelForm()">Cancel</button>
            </div>
        </form>
    </div>
 );
}
 
export default Form;