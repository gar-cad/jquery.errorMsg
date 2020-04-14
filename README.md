# jquery.errorMsg

A simple jquery plugin that displays an error message using the Bootstrap alert component. It takes 4 arguments:

1. color: The background color of the alert - uses bootstrap classes. Default: 'danger'.
2. message: The message to display. Default: 'Error'.
3. closeBtn: Display a close button or not. Default: true.
4. location: Where to display the error message? Append / Prepend the element. Default: 'append'.

### Prerequisites

jquery 2.0.1, bootstrap


### Set up

Install the plugin, and use the following source code as an example. Basic use (using the default syntax), more examples can be found in the demo folder.

##### HTML
```
<div id="login">
    <form>
        <div class="form-group row my-2">
            <label for="username" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="username" value="email@example.com">
            </div>
        </div>
        <div class="form-group row">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
        </div>
        <div class="form-group row">
            <button id="loginBtn" class="col-sm-12 btn btn-primary" type="submit">Login</button>
        </div>
    </form>
</div>
```

##### javascript
```

<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="../dist/jquery.errorMsg.min.js"></script>
<script>
    $(function() {
        $('body').on('click','#loginBtn', function() {
            event.preventDefault();
            $('#login').errorMsg({message: 'Username does not exist.'});
        })
    });
</script>
```

## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.errorMsg/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details
