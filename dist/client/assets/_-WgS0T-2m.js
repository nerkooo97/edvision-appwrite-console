import{t as e}from"./brain-circuit-PjwQiHhh.js";import{$4 as t,Ag as n,Au as r,Bg as i,Mg as a,Og as o,Pit as s,Q4 as c,Q7 as ee,Sl as l,Z4 as te,aat as u,ff as d,iet as f,lat as p,m9 as ne,nat as m,net as h,qi as g,ql as _,r3 as v,v3 as y}from"./main-uHRHOkhm.js";import"./use-article-sticky-overlay-3jqsSYtN.js";import{a as re,n as ie,t as b}from"./ide-Dk_d_lr4.js";import"./DocsSectionSubnav-C7tc3JOQ.js";import{t as x}from"./DocsLayout-BW62AYji.js";var S=`## Add Appwrite auth to a new Android (Kotlin/Jetpack Compose) app with a working login/register/logout page

- Never assume project details. Ask the user for **Cloud Region**, **Project ID**, and **package name**.
- Use explicit config (no hardcoding in code except reading constants the user sets).
- Respect the user's existing project structure and theme.

## Step 1: Create or use existing Android project

- If you already have an Android project open in Android Studio, stay in it and use it.
- Otherwise, guide the user to open Android Studio and click **New Project**.
- Choose **Empty Activity** template and click **Next**.
- Enter the app **name** and **package name** (both are needed later for Appwrite Console).
- Click **Finish** to create the project.

## Step 2: Create Appwrite project (ask user)

- Guide user to the [Appwrite Console](https://cloud.appwrite.io/console).
- Create an account and project if this is their first time.
- Under **Add a platform**, add an **Android app**.
- Add the app's **name** and **package name** (use the **applicationId** from app-level \`build.gradle\` for existing projects).
- Ask user for their **Cloud Region** and **Project ID** from Console -> Settings.

## Step 3: Add the Appwrite SDK

- Add the following dependency to the app-level \`build.gradle.kts\` file inside the **dependencies** block:

\`\`\`kotlin
implementation("io.appwrite:sdk-for-android:8.1.0")
\`\`\`

- Add the OAuth callback activity inside the \`<application>\` tag in \`AndroidManifest.xml\` (replace \`<PROJECT_ID>\` with actual project ID):

\`\`\`xml
<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the \`<application>\` tag, along side the existing \`<activity>\` tags -->
    <activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="appwrite-callback-<PROJECT_ID>" />
      </intent-filter>
    </activity>
  </application>
</manifest>
\`\`\`

## Step 4: Create Appwrite Singleton (key snippet)

- File: \`Appwrite.kt\` (in your root package)
- Ask user for **Cloud Region** and **Project ID**, then create:

\`\`\`kotlin
package <YOUR_ROOT_PACKAGE_HERE>

import android.content.Context
import io.appwrite.Client
import io.appwrite.ID
import io.appwrite.models.*
import io.appwrite.services.*

object Appwrite {
    lateinit var client: Client
    lateinit var account: Account

    fun init(context: Context) {
        client = Client(context)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
            .setProject("<PROJECT_ID>")

        account = Account(client)
    }

    suspend fun onLogin(
        email: String,
        password: String,
    ): Session {
        return account.createEmailPasswordSession(
            email,
            password,
        )
    }

    suspend fun onRegister(
        email: String,
        password: String,
    ): User<Map<String, Any>> {
        return account.create(
            userId = ID.unique(),
            email,
            password,
        )
    }

    suspend fun onLogout() {
        account.deleteSession("current")
    }
}
\`\`\`

## Step 5: Create login page (MainActivity.kt)

- Replace or update \`MainActivity.kt\` with the following Jetpack Compose UI:

\`\`\`kotlin
package <YOUR_ROOT_PACKAGE_HERE>

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.*
import androidx.compose.ui.text.input.*
import androidx.compose.ui.unit.*
import <YOUR_ROOT_PACKAGE_HERE>.ui.theme.MyApplicationTheme
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Appwrite.init(applicationContext)

        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val coroutineScope = rememberCoroutineScope()

                    var user by remember { mutableStateOf("") }
                    var email by remember { mutableStateOf("") }
                    var password by remember { mutableStateOf("") }

                    if (user.isNotEmpty()) {
                        Column(
                            modifier = Modifier.fillMaxSize(),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.Center
                        ) {
                            Text(text = "Logged in as $user")
                            Button(onClick = {
                                coroutineScope.launch {
                                    Appwrite.onLogout()
                                }
                            }) {
                                Text("Logout")
                            }
                        }
                    }

                    Column(
                        modifier = Modifier.fillMaxSize(),
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center
                    ) {
                        TextField(
                            value = email,
                            onValueChange = { email = it },
                            label = { Text("Username") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp)
                        )
                        TextField(
                            value = password,
                            onValueChange = { password = it },
                            label = { Text("Password") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            visualTransformation = PasswordVisualTransformation(),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password)
                        )
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Appwrite.onLogin(email, password)

                                        user = email
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Login")
                            }
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Appwrite.onRegister(email, password)
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Register")
                            }
                        }
                    }
                }
            }
        }
    }
}
\`\`\`

- The UI includes:
    - Email and password text fields
    - Login and Register buttons
    - Shows "Logged in as (email)" when a session exists
    - Logout button when logged in

## Step 6: Verify configuration

- Confirm **Cloud Region** and **Project ID** are set in \`Appwrite.kt\`.
- Confirm the **PROJECT_ID** in \`AndroidManifest.xml\` matches the actual project ID.
- Ensure the Android platform exists in Appwrite Console with the correct **package name**.

## Step 7: Run and test

- Click **Run app** in Android Studio.
- Test flows:
    - Register a new user
    - Login with the registered user
    - Logout
- Surface any Appwrite errors and fix by guiding updates to \`Appwrite.kt\` and Console settings.

## Deliverables

- A running Android app with working Appwrite auth (register/login/logout)
- Files created/updated: \`build.gradle.kts\` (deps), \`AndroidManifest.xml\` (OAuth callback), \`Appwrite.kt\` (singleton), \`MainActivity.kt\` (UI)
`,C=`## Add Appwrite auth to a new Android (Java) app with a working login/register/logout UI

- Never assume project details. Ask the user for **Cloud Region**, **Project ID**, and **package name**.
- Use **Android Studio** as the development environment.
- Ensure the user creates a platform in the Appwrite Console with the correct **package name**.

## Step 1: Create or use existing Android project

- If you already have an Android project open in Android Studio, stay in it and use it.
- Otherwise, open Android Studio and click **New Project**.
- Choose a project template (e.g., **Empty Activity**) and click **Next**.
- Enter the app **name** and **package name**, then click **Finish**.

## Step 2: Create Appwrite project

- Ask the user to go to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is their first time, they should create an account and create their first project.
- Under **Add a platform**, add an **Android app** with the app's **name** and **package name** (the \`applicationId\` from the app-level \`build.gradle\`).

## Step 3: Add the Appwrite SDK (ask user for Project ID)

- Add the following dependency to the app-level \`build.gradle\` file inside the **dependencies** block:

\`\`\`groovy
implementation "io.appwrite:sdk-for-android:8.1.0"
\`\`\`

- Add the OAuth callback activity inside the \`<application>\` tag in \`AndroidManifest.xml\` (replace \`<PROJECT_ID>\` with actual project ID):

\`\`\`xml
<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the \`<application>\` tag, along side the existing \`<activity>\` tags -->
    <activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="appwrite-callback-<PROJECT_ID>" />
      </intent-filter>
    </activity>
  </application>
</manifest>
\`\`\`

## Step 4: Create Appwrite helper class (ask user for Region and Project ID)

- Ask the user for:
    - **Cloud Region** (e.g., \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
- Create file: \`AppwriteHelper.java\` with the following code (replace \`<YOUR_ROOT_PACKAGE_HERE>\`, \`<REGION>\`, and \`<PROJECT_ID>\`):

\`\`\`java
package <YOUR_ROOT_PACKAGE_HERE>;

import android.content.Context;

import java.util.Map;

import io.appwrite.Client;
import io.appwrite.ID;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.models.Session;
import io.appwrite.models.User;
import io.appwrite.services.Account;

public class AppwriteHelper {
    private static AppwriteHelper instance;
    private Client client;
    private Account account;

    private AppwriteHelper(Context context) {
        client = new Client(context)
                .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
                .setProject("<PROJECT_ID>");

        account = new Account(client);
    }

    public static synchronized AppwriteHelper getInstance(Context context) {
        if (instance == null) {
            instance = new AppwriteHelper(context.getApplicationContext());
        }
        return instance;
    }

    public interface AuthCallback<T> {
        void onSuccess(T result);
        void onError(Exception error);
    }

    public void login(String email, String password, final AuthCallback<Session> callback) {
        account.createEmailPasswordSession(
            email,
            password,
            new CoroutineCallback<>((result, error) -> {
                if (error != null) {
                    callback.onError(new Exception(error));
                    return;
                }
                callback.onSuccess(result);
            })
        );
    }

    public void register(String email, String password, final AuthCallback<User<Map<String, Object>>> callback) {
        account.create(
            ID.unique(),
            email,
            password,
            new CoroutineCallback<>((result, error) -> {
                if (error != null) {
                    callback.onError(new Exception(error));
                    return;
                }
                callback.onSuccess(result);
            })
        );
    }

    public void logout(final AuthCallback<Object> callback) {
        account.deleteSession(
            "current",
            new CoroutineCallback<>((result, error) -> {
                if (error != null) {
                    callback.onError(new Exception(error));
                    return;
                }
                callback.onSuccess(result);
            })
        );
    }
}
\`\`\`

## Step 5: Create login UI in XML

- Update \`activity_main.xml\` layout file:

\`\`\`xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/textViewStatus"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center"
        android:padding="16dp"
        android:textSize="18sp"
        android:visibility="gone" />

    <Button
        android:id="@+id/buttonLogout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Logout"
        android:layout_marginBottom="16dp"
        android:visibility="gone" />

    <EditText
        android:id="@+id/editTextEmail"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="8dp"
        android:hint="Email"
        android:inputType="textEmailAddress" />

    <EditText
        android:id="@+id/editTextPassword"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="16dp"
        android:hint="Password"
        android:inputType="textPassword" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <Button
            android:id="@+id/buttonLogin"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:layout_marginEnd="8dp"
            android:text="Login" />

        <Button
            android:id="@+id/buttonRegister"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:layout_marginStart="8dp"
            android:text="Register" />
    </LinearLayout>

</LinearLayout>
\`\`\`

## Step 6: Create MainActivity

- Update \`MainActivity.java\` with the following code (replace \`<YOUR_ROOT_PACKAGE_HERE>\`):

\`\`\`java
package <YOUR_ROOT_PACKAGE_HERE>;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Map;

import io.appwrite.models.Session;
import io.appwrite.models.User;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "MainActivity";

    private EditText editTextEmail;
    private EditText editTextPassword;
    private Button buttonLogin;
    private Button buttonRegister;
    private TextView textViewStatus;
    private Button buttonLogout;
    private AppwriteHelper appwrite;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initialize Appwrite
        appwrite = AppwriteHelper.getInstance(getApplicationContext());

        setContentView(R.layout.activity_main);

        // Initialize UI components
        editTextEmail = findViewById(R.id.editTextEmail);
        editTextPassword = findViewById(R.id.editTextPassword);
        buttonLogin = findViewById(R.id.buttonLogin);
        buttonRegister = findViewById(R.id.buttonRegister);
        textViewStatus = findViewById(R.id.textViewStatus);
        buttonLogout = findViewById(R.id.buttonLogout);

        // Set up click listeners
        buttonLogin.setOnClickListener(v -> login());
        buttonRegister.setOnClickListener(v -> register());
        buttonLogout.setOnClickListener(v -> logout());
    }

    private void login() {
        String email = editTextEmail.getText().toString().trim();
        String password = editTextPassword.getText().toString().trim();

        if (email.isEmpty() || password.isEmpty()) {
            Toast.makeText(this, "Please enter email and password", Toast.LENGTH_SHORT).show();
            return;
        }

        appwrite.login(email, password, new AppwriteHelper.AuthCallback<Session>() {
            @Override
            public void onSuccess(Session result) {
                runOnUiThread(() -> {
                    Toast.makeText(MainActivity.this, "Login successful", Toast.LENGTH_SHORT).show();
                    showLoggedInUI(email);
                });
            }

            @Override
            public void onError(Exception error) {
                runOnUiThread(() -> {
                    Log.e(TAG, "Login failed", error);
                    Toast.makeText(MainActivity.this, "Login failed: " + error.getMessage(), Toast.LENGTH_SHORT).show();
                });
            }
        });
    }

    private void register() {
        String email = editTextEmail.getText().toString().trim();
        String password = editTextPassword.getText().toString().trim();

        if (email.isEmpty() || password.isEmpty()) {
            Toast.makeText(this, "Please enter email and password", Toast.LENGTH_SHORT).show();
            return;
        }

        appwrite.register(email, password, new AppwriteHelper.AuthCallback<User<Map<String, Object>>>() {
            @Override
            public void onSuccess(User<Map<String, Object>> result) {
                runOnUiThread(() -> {
                    Toast.makeText(MainActivity.this, "Registration successful. You can now login.", Toast.LENGTH_SHORT).show();
                });
            }

            @Override
            public void onError(Exception error) {
                runOnUiThread(() -> {
                    Log.e(TAG, "Registration failed", error);
                    Toast.makeText(MainActivity.this, "Registration failed: " + error.getMessage(), Toast.LENGTH_SHORT).show();
                });
            }
        });
    }

    private void logout() {
        appwrite.logout(new AppwriteHelper.AuthCallback<Object>() {
            @Override
            public void onSuccess(Object result) {
                runOnUiThread(() -> {
                    Toast.makeText(MainActivity.this, "Logout successful", Toast.LENGTH_SHORT).show();
                    showLoginUI();
                });
            }

            @Override
            public void onError(Exception error) {
                runOnUiThread(() -> {
                    Log.e(TAG, "Logout failed", error);
                    Toast.makeText(MainActivity.this, "Logout failed: " + error.getMessage(), Toast.LENGTH_SHORT).show();
                });
            }
        });
    }

    private void showLoggedInUI(String email) {
        editTextEmail.setVisibility(View.GONE);
        editTextPassword.setVisibility(View.GONE);
        buttonLogin.setVisibility(View.GONE);
        buttonRegister.setVisibility(View.GONE);

        textViewStatus.setVisibility(View.VISIBLE);
        buttonLogout.setVisibility(View.VISIBLE);

        textViewStatus.setText("Logged in as " + email);
    }

    private void showLoginUI() {
        editTextEmail.setVisibility(View.VISIBLE);
        editTextPassword.setVisibility(View.VISIBLE);
        buttonLogin.setVisibility(View.VISIBLE);
        buttonRegister.setVisibility(View.VISIBLE);

        textViewStatus.setVisibility(View.GONE);
        buttonLogout.setVisibility(View.GONE);
    }
}
\`\`\`

## Step 7: Run and test

- Click **Run app** in Android Studio.
- Test flows:
    - Register a new user
    - Login with the registered user
    - Logout
- Surface any Appwrite errors and fix by guiding updates to \`AppwriteHelper.java\` and Console settings.

## Deliverables

- A running Android app with working Appwrite auth (register/login/logout)
- Files created/updated: app-level \`build.gradle\` (dependency), \`AndroidManifest.xml\` (OAuth callback), \`AppwriteHelper.java\`, \`activity_main.xml\`, \`MainActivity.java\`
`,w=`## Add Appwrite Auth to a New Angular App

Goal: Add Appwrite auth to a new Angular app with a working login/register/logout page.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all times. Don't use NPM if the user uses something else.

## Step 1: Create or Use Existing Angular App

- First, check the current working directory:
    - If the directory contains files that appear unrelated to a development workspace (e.g., personal files, downloads, random documents, media files), ask the user: 'The current directory contains files that don't appear to be part of a development project. Would you like to: (1) proceed here anyway, or (2) create a subdirectory with a specific folder name?' and proceed based on their choice.
    - If the directory is empty OR contains an existing project (\`package.json\`, \`src\` folder, config files, etc.), proceed with integration without asking.
- If an existing Angular project is detected, use it directly.
- Otherwise, ensure Angular CLI is installed: \`npm install -g @angular/cli\`
- Create a project in the current directory: \`ng new . --directory .\`
- NEVER use \`cd\` to change directories - always work in the current directory (\`.\`)

## Step 2: Install Appwrite SDK

- Run: \`npm install appwrite\`

## Step 3: Create Appwrite Client Module

Ask the user for details; never assume.

- Ask the user for:
    - **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
- Hardcode the endpoint and **Project ID** in the file \`src/lib/appwrite.ts\` if provided, else leave placeholder and ask the user to provide them.
- Create file \`src/lib/appwrite.ts\` with key snippet:

\`\`\`ts
import { Client, Account } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://<REGION>.cloud.appwrite.io/v1').setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
\`\`\`

## Step 4: Build the Login Page

- First, add \`FormsModule\` import to handle the login form. Update \`app.module.ts\`:

\`\`\`ts
import { FormsModule } from '@angular/forms';
...
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
\`\`\`

- Replace the contents of \`src/app/app.component.html\`:

\`\`\`html
<div>
    <p>{{ loggedInUser ? 'Logged in as ' + loggedInUser.name : 'Not logged in' }}</p>

    <div>
        <input type="email" placeholder="Email" [(ngModel)]="email" />
        <input type="password" placeholder="Password" [(ngModel)]="password" />
        <input type="text" placeholder="Name" [(ngModel)]="name" />

        <button (click)="login(email, password)">Login</button>

        <button (click)="register(email, password, name)">Register</button>

        <button (click)="logout()">Logout</button>
    </div>
</div>
\`\`\`

- Update \`src/app/app.component.ts\`:

\`\`\`ts
import { Component } from '@angular/core';
import { account, ID } from '../lib/appwrite';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    loggedInUser: any = null;
    email: string = '';
    password: string = '';
    name: string = '';

    async login(email: string, password: string) {
        await account.createEmailPasswordSession({
            email,
            password
        });
        this.loggedInUser = await account.get();
    }

    async register(email: string, password: string, name: string) {
        await account.create({
            userId: ID.unique(),
            email,
            password,
            name
        });
        this.login(email, password);
    }

    async logout() {
        await account.deleteSession({
            sessionId: 'current'
        });
        this.loggedInUser = null;
    }
}
\`\`\`

## Step 5: Verify Environment

Ask the user to confirm.

- Confirm endpoint and **Project ID** are set in \`src/lib/appwrite.ts\`.
- Ensure the Web app platform exists in Appwrite Console with **Hostname** = \`localhost\`. If missing, guide the user to add it.

## Step 6: Run and Test

- Run: \`ng serve --port 3000\`
- Open: \`http://localhost:3000\`
- Test flows:
    - Register a new user and auto login works
    - Logout then login again
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to \`appwrite.ts\` and Console settings.

## Deliverables

- A running Angular app with working Appwrite auth (register/login/logout)
- Files created/updated: \`package.json\` (deps), \`src/lib/appwrite.ts\`, \`src/app/app.module.ts\`, \`src/app/app.component.html\`, \`src/app/app.component.ts\`
`,T=`## Add Appwrite Auth to an Apple (iOS/macOS/watchOS/tvOS) App

Goal: Add Appwrite auth to an Apple (iOS/macOS/watchOS/tvOS) app with a working login and register page using SwiftUI.

**Rules**

- Never assume project details. Ask the user for **Cloud Region**, **Project ID**, and **bundle identifier**.
- Use explicit config (no hardcoding except reading constants the user provides).
- Respect the user's Xcode project setup and Apple platform choice.

## Step 1: Create or Use Existing Apple Project

- If you already have an Xcode project open, stay in it and use it.
- Otherwise, guide the user to:
    - Open Xcode and click **Create a new Xcode project**
    - Choose the desired template (e.g., **iOS App**) and click **Next**
    - Enter app **product name** and **bundle identifier**, then click **Next**
    - Choose a directory and click **Create**

## Step 2: Create Appwrite Project

- Ask user to go to the [Appwrite Console](https://cloud.appwrite.io/console) and create a project if they haven't already.
- Under **Add a platform**, add an **Apple app** (iOS, macOS, watchOS, or tvOS).
- Add the app's **product name** and **bundle identifier** from the Xcode project.

## Step 3: Add the Appwrite SDK

- In Xcode, open the **File** menu and click **Add Packages**.
- In the **Package URL** search box, enter: \`https://github.com/appwrite/sdk-for-apple\`
- Use \`10.1.0\` as version, select **Up to Next Major Version** as **Dependency Rule**, and click **Add Package**.
- When resolution is complete, click **Add Package** again to add the SDK to the target.
- Ask the user for their **Project ID** and add the following URL scheme to \`Info.plist\` for OAuth sessions:

\`\`\`xml
<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.appwrite</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>appwrite-callback-<PROJECT_ID></string>
    </array>
</dict>
</array>
\`\`\`

- If using UIKit instead of SwiftUI, add the following to \`SceneDelegate.swift\`:

\`\`\`swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url,
        url.absoluteString.contains("appwrite-callback") else {
        return
    }

    WebAuthComponent.handleIncomingCookie(from: url)
}
\`\`\`

## Step 4: Create Appwrite Singleton (Ask User for Details)

- Ask the user for:
    - Appwrite **Cloud Region** (e.g., \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
- Create file \`Appwrite.swift\` with the following code:

\`\`\`swift
import Foundation
import Appwrite
import JSONCodable

class Appwrite {
    var client: Client
    var account: Account

    public init() {
        self.client = Client()
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
            .setProject("<PROJECT_ID>")

        self.account = Account(client)
    }

    public func onRegister(
        _ email: String,
        _ password: String
    ) async throws -> User<[String: AnyCodable]> {
        try await account.create(
            userId: ID.unique(),
            email: email,
            password: password
        )
    }

    public func onLogin(
        _ email: String,
        _ password: String
    ) async throws -> Session {
        try await account.createEmailPasswordSession(
            email: email,
            password: password
        )
    }

    public func onLogout() async throws {
        _ = try await account.deleteSession(
            sessionId: "current"
        )
    }

}
\`\`\`

## Step 5: Create a Login Page

- Add the following code to \`ContentView.swift\`:

\`\`\`swift
import SwiftUI

class ViewModel: ObservableObject {
    @Published var email: String = ""
    @Published var password: String = ""
}

struct ContentView: View {
    @StateObject var viewModel = ViewModel()
    let appwrite = Appwrite()

    var body: some View {
        VStack {
            TextField(
                "Email",
                text: $viewModel.email
            )
            SecureField(
                "Password",
                text: $viewModel.password
            )
            Button(
                action: { Task {
                    try await appwrite.onRegister(
                        viewModel.email,
                        viewModel.password
                    )
                }},
                label: {
                    Text("Register")
                }
            )
            Button(
                action: { Task {
                    try await appwrite.onLogin(
                        viewModel.email,
                        viewModel.password
                    )
                }},
                label: {
                    Text("Login")
                }
            )
        }
        .padding()
    }
}
\`\`\`

## Step 6: Run and Test

- Run the project by clicking **Start active scheme** in Xcode.
- Test flows:
    - Register a new user
    - Login with the registered user
- Surface any Appwrite errors (invalid project, endpoint, platform mismatch) and fix by guiding updates to \`Appwrite.swift\` and Console settings.

## Deliverables

- A running Apple app with working Appwrite auth (register/login/logout)
- Files created/updated: \`Appwrite.swift\`, \`ContentView.swift\`, \`Info.plist\` (URL scheme)
`,E=`## Create a Dart server-side CLI application with Appwrite

Create a Dart server-side CLI application with Appwrite that demonstrates database operations (create database, table, columns, and CRUD operations on rows).

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

## Step 1: Create Dart project

- Run: \`dart create -t console my_app\`
- Change dir: \`cd my_app\`
- Remove the \`lib/\` and \`test/\` directories after entering the project directory.

## Step 2: Install Appwrite SDK

- Run: \`dart pub add dart_appwrite:16.0.0\`

## Step 3: Create Appwrite project and API key

Ask the user for details; never assume.

- Ask the user for:
    - **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API Key** (from Console -> View API Keys)
- The API key must have the following scopes:
    - Database: \`databases.write\`, \`tables.write\`, \`columns.write\`, \`rows.read\`, \`rows.write\`
- If the user doesn't know, guide them to Appwrite Console to create a project and API key with the required scopes.

## Step 4: Initialize Appwrite Client

- Open \`bin/my_app.dart\` and initialize the Appwrite Client.
- Replace \`<REGION>\`, \`<PROJECT_ID>\`, and \`<YOUR_API_KEY>\` with the user's values if provided, else leave placeholders and ask the user to provide them.
- Create/update file \`bin/my_app.dart\` with key snippet:

\`\`\`dart
import 'package:dart_appwrite/dart_appwrite.dart';

var client = Client();

Future<void> main() async {
  client
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<YOUR_API_KEY>");
}
\`\`\`

## Step 5: Initialize database

- Add a function to configure a todo table with columns:

\`\`\`dart
var tablesDB;
var todoDatabase;
var todoTable;

Future<void> prepareDatabase() async {
  tablesDB = TablesDB(client);

  todoDatabase = await tablesDB.create(
    databaseId: ID.unique(),
    name: 'TodosDB'
  );

  todoTable = await tablesDB.createTable(
    databaseId: todoDatabase.$id,
    tableId: ID.unique(),
    name: 'Todos'
  );

  await tablesDB.createVarcharColumn(
    databaseId: todoDatabase.$id,
    tableId: todoTable.$id,
    key: 'title',
    size: 255,
    xrequired: true
  );

  await tablesDB.createTextColumn(
    databaseId: todoDatabase.$id,
    tableId: todoTable.$id,
    key: 'description',
    xrequired: false,
    xdefault: 'This is a test description'
  );

  await tablesDB.createBooleanColumn(
    databaseId: todoDatabase.$id,
    tableId: todoTable.$id,
    key: 'isComplete',
    xrequired: true
  );
}
\`\`\`

## Step 6: Add rows

- Create a function to add mock todo data:

\`\`\`dart
Future<void> seedDatabase() async {
  var testTodo1 = {
    'title': 'Buy apples',
    'description': 'At least 2KGs',
    'isComplete': true
  };

  var testTodo2 = {
    'title': 'Wash the apples',
    'isComplete': true
  };

  var testTodo3 = {
    'title': 'Cut the apples',
    'description': 'Don\\'t forget to pack them in a box',
    'isComplete': false
  };

  await tablesDB.createRow(
    databaseId: todoDatabase.$id,
    tableId: todoTable.$id,
    rowId: ID.unique(),
    data: testTodo1
  );

  await tablesDB.createRow(
    databaseId: todoDatabase.$id,
    tableId: todoTable.$id,
    rowId: ID.unique(),
    data: testTodo2
  );

  await tablesDB.createRow(
    databaseId: todoDatabase.$id,
    tableId: todoTable.$id,
    rowId: ID.unique(),
    data: testTodo3
  );
}
\`\`\`

## Step 7: Retrieve rows

- Create a function to retrieve and display the todo data:

\`\`\`dart
Future<void> getTodos() async {
  var todos = await tablesDB.listRows(
    databaseId: todoDatabase.$id,
    tableId: todoTable.$id
  );

  todos.rows.forEach((todo) {
    print('Title: \${todo.data['title']}\\nDescription: \${todo.data['description']}\\nIs Todo Complete: \${todo.data['isComplete']}\\n\\n');
  });
}
\`\`\`

## Step 8: Update main function

- Update the \`main()\` function to call all the functions:

\`\`\`dart
Future<void> main() async {
  client
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<YOUR_API_KEY>");

    await prepareDatabase();
    await Future.delayed(const Duration(seconds: 1));
    await seedDatabase();
    await getTodos();
}
\`\`\`

## Step 9: Run and test

- Run: \`dart run bin/my_app.dart\`
- View the response in your console showing the todo items.
- Surface any Appwrite errors (invalid project, endpoint, API key) and fix by guiding updates to the configuration.

## Deliverables

- A running Dart CLI application with working Appwrite database operations
- Files created/updated: \`pubspec.yaml\` (deps), \`bin/my_app.dart\`
`,D=`## Create a Deno server backend application powered by Appwrite that creates a todo database, adds sample data, and retrieves it

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

_Note: The dedicated Deno SDK has been deprecated. Use the Node.js SDK directly through npm specifiers, thanks to Deno's excellent Node.js compatibility._

## Step 1: Create project in Appwrite Console

- Guide the user to head to the **Appwrite Console** (https://cloud.appwrite.io/console).
- If this is their first time, have them create an account and create their first project.
- Under **Integrate with your server**, add an **API Key** with these scopes:
    - Database: \`databases.write\`, \`tables.write\`, \`columns.write\`, \`rows.read\`, \`rows.write\`
- Ask the user for:
    - **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API Key** (from View API Keys button in Settings)
- If the user doesn't know, guide them to the **Appwrite Console** to copy these. Do not attempt to infer or access their project.

## Step 2: Create Deno project

- If you already have a Deno project open, stay in it and use it.
- Otherwise, create a new Deno CLI application:

\`\`\`sh
mkdir my-app
cd my-app
echo "console.log('Hello, Deno!');" > mod.ts
\`\`\`

## Step 3: Install Appwrite SDK

- Use npm specifiers at the top of your file to import the SDK:

\`\`\`ts
// import all as sdk
import * as sdk from "npm:node-appwrite";

// import only what you need
import { Client, ... other imports } from "npm:node-appwrite";
\`\`\`

## Step 4: Initialize Appwrite Client

- Open \`mod.ts\` and initialize the Appwrite Client with the user's credentials.
- Replace placeholders with the actual values provided by the user:

\`\`\`ts
import { Client, ID, TablesDB, Models } from 'npm:node-appwrite';

const client: Client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<YOUR_API_KEY>');
\`\`\`

## Step 5: Initialize database

- Create a function to configure a todo table:

\`\`\`ts
const tablesDB: TablesDB = new TablesDB(client);

var todoDatabase: Models.Database;
var todoTable: Models.Table;

interface Todo {
    title: string;
    description: string;
    isComplete?: boolean;
}

async function prepareDatabase(): Promise<void> {
    todoDatabase = await tablesDB.create({
        databaseId: ID.unique(),
        name: 'TodosDB'
    });

    todoTable = await tablesDB.createTable({
        databaseId: todoDatabase.$id,
        tableId: ID.unique(),
        name: 'Todos'
    });

    await tablesDB.createVarcharColumn({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        key: 'title',
        size: 255,
        required: true
    });

    await tablesDB.createTextColumn({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        key: 'description',
        required: false,
        xdefault: 'This is a test description'
    });

    await tablesDB.createBooleanColumn({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        key: 'isComplete',
        required: true
    });
}
\`\`\`

## Step 6: Add rows

- Create a function to add mock data into the new table:

\`\`\`ts
async function seedDatabase(): Promise<void> {
    const testTodo1: Todo = {
        title: 'Buy apples',
        description: 'At least 2KGs',
        isComplete: true
    };

    const testTodo2: Todo = {
        title: 'Wash the apples',
        isComplete: true
    };

    const testTodo3: Todo = {
        title: 'Cut the apples',
        description: "Don't forget to pack them in a box",
        isComplete: false
    };

    await tablesDB.createRow({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        rowId: ID.unique(),
        data: testTodo1
    });
    await tablesDB.createRow({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        rowId: ID.unique(),
        data: testTodo2
    });
    await tablesDB.createRow({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        rowId: ID.unique(),
        data: testTodo3
    });
}
\`\`\`

## Step 7: Retrieve rows

- Create a function to retrieve the mock todo data and a function to execute the requests in order:

\`\`\`ts
async function getTodos(): Promise<void> {
    const todos = await tablesDB.listRows({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id
    });

    todos.rows.forEach((todo: Todo) => {
        console.log(
            \`Title: \${todo.title}\\nDescription: \${todo.description}\\nIs Todo Complete: \${todo.isComplete}\\n\\n\`
        );
    });
}

async function runAllTasks(): Promise<void> {
    await prepareDatabase();
    await seedDatabase();
    await getTodos();
}
runAllTasks();
\`\`\`

## Step 8: Run and test

- Run the project: \`deno mod.ts\`
- View the response in your console.
- The output should display the three todo items with their titles, descriptions, and completion status.
- Surface any Appwrite errors (invalid project, endpoint, API key) and fix by guiding updates to \`mod.ts\` and Console settings.

## Deliverables

- A running Deno server application that creates a todo database, seeds it with sample data, and retrieves/displays the todos.
- Files created/updated: \`mod.ts\` (with Appwrite client initialization, database setup, seeding, and retrieval functions)
`,O=`## Create a .NET console application with Appwrite server integration that sets up a todo database with tables and rows

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

## Step 1: Create project in Appwrite Console

- Head to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is the user's first time, guide them to create an account and create their first project.
- Under **Integrate with your server**, add an **API Key** with the following scopes:

| Category | Required scopes   | Purpose                                                 |
| -------- | ----------------- | ------------------------------------------------------- |
| Database | \`databases.write\` | Allows API key to create, update, and delete databases. |
|          | \`tables.write\`    | Allows API key to create, update, and delete tables.    |
|          | \`columns.write\`   | Allows API key to create, update, and delete columns.   |
|          | \`rows.read\`       | Allows API key to read rows.                            |
|          | \`rows.write\`      | Allows API key to create, update, and delete rows.      |

- Other scopes are optional.

## Step 2: Create .NET project

- Run: \`dotnet new console -o MyApp\`
- Change dir: \`cd MyApp\`

## Step 3: Install Appwrite SDK

- Run: \`dotnet add package Appwrite --version 0.13.0\`

## Step 4: Import Appwrite and initialize client (ask user for details; never assume)

- Ask the user for:
    - Appwrite **Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API Key** (from Console -> View API Keys)
- Open \`Program.cs\` and initialize the Appwrite Client.
- Create/update file: \`Program.cs\` with key snippet:

\`\`\`csharp
using Appwrite;
using Appwrite.Models;
using Appwrite.Services;

var client = new Client();

client
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .SetProject("<PROJECT_ID>")
    .SetKey("<YOUR_API_KEY>");
\`\`\`

## Step 5: Initialize database

- Add code to create a todo database and table with columns:

\`\`\`csharp
var tablesDB = new TablesDB(client);

Database todoDatabase;
Table todoTable;

todoDatabase = await tablesDB.Create(
    databaseId: ID.Unique(),
    name: "TodosDB"
);

todoTable = await tablesDB.CreateTable(
    databaseId: todoDatabase.Id,
    tableId: ID.Unique(),
    name: "Todos"
);

await tablesDB.CreateVarcharColumn(
    databaseId: todoDatabase.Id,
    tableId: todoTable.Id,
    key: "title",
    size: 255,
    required: true
);

await tablesDB.CreateTextColumn(
    databaseId: todoDatabase.Id,
    tableId: todoTable.Id,
    key: "description",
    required: false,
    xdefault: "This is a test description"
);

await tablesDB.CreateBooleanColumn(
    databaseId: todoDatabase.Id,
    tableId: todoTable.Id,
    key: "isComplete",
    required: true
);
\`\`\`

## Step 6: Add rows

- Add code to insert mock todo data:

\`\`\`csharp
var testTodo1 = new Dictionary<string, object>()
{
    {"title", "Buy apples"},
    {"description", "At least 2KGs"},
    {"isComplete", true}
};

var testTodo2 = new Dictionary<string, object>()
{
    {"title", "Wash the apples"},
    {"isComplete", true}
};

var testTodo3 = new Dictionary<string, object>()
{
    {"title", "Cut the apples"},
    {"description", "Don't forget to pack them in a box"},
    {"isComplete", false}
};

await tablesDB.CreateRow(
    databaseId: todoDatabase.Id,
    tableId: todoTable.Id,
    rowId: ID.Unique(),
    data: testTodo1
);

await tablesDB.CreateRow(
    databaseId: todoDatabase.Id,
    tableId: todoTable.Id,
    rowId: ID.Unique(),
    data: testTodo2
);

await tablesDB.CreateRow(
    databaseId: todoDatabase.Id,
    tableId: todoTable.Id,
    rowId: ID.Unique(),
    data: testTodo3
);
\`\`\`

## Step 7: Retrieve rows

- Add code to retrieve and display the todo data:

\`\`\`csharp
var todos = await tablesDB.ListRows(
    databaseId: todoDatabase.Id,
    tableId: todoTable.Id
);

foreach (var todo in todos.Rows)
{
    Console.WriteLine($"Title: {todo.Data["title"]}\\nDescription: {todo.Data["description"]}\\nIs Todo Complete: {todo.Data["isComplete"]}\\n\\n");
}
\`\`\`

## Step 8: Run and test

- Run: \`dotnet run\`
- View the response in the console.
- Surface any Appwrite errors (invalid project, endpoint, API key) and fix by guiding updates to \`Program.cs\` and Console settings.

## Deliverables

- A running .NET console application with working Appwrite server integration
- Files created/updated: \`MyApp.csproj\` (deps), \`Program.cs\`
- A **TodosDB** database with a **Todos** table containing three sample todo items
`,k=`## Add Appwrite Auth to a New Flutter App

Goal: Add Appwrite auth to a new Flutter app with a working login/register/logout page.

- Never assume project details. Ask the user for **Cloud Region** and **Project ID**.
- Ask the user which platform(s) they are targeting (**Web**, **iOS**, **Android**, **Linux**, **macOS**, **Windows**).
- For each target platform, guide the user through the platform-specific setup requirements.

## Step 1: Create Flutter Project

- If you already have a Flutter project open, stay in it and use it.
- Otherwise, run: \`flutter create my_app && cd my_app\`

## Step 2: Create Appwrite Project and Add Platform

Guide user to the [Appwrite Console](https://cloud.appwrite.io/console) to create a project if needed.

Ask the user for:

- **Cloud Region** (e.g., \`fra\`, \`nyc\`)
- **Project ID** (from Console -> Settings)

Under **Add a platform**, add a Flutter app for the target platform:

### Web

Add app name and **Hostname** (use \`localhost\` for local testing). Create \`web/auth.html\` for OAuth callback:

\`\`\`html
<!DOCTYPE html>
<title>Authentication complete</title>
<p>Authentication is complete. If this does not happen automatically, please close the window.</p>
<script>
    window.opener.postMessage(
        {
            'flutter-web-auth-2': window.location.href
        },
        window.location.origin
    );
    window.close();
<\/script>
\`\`\`

### iOS

Add app name and **Bundle ID**. Set iOS Deployment Target to iOS >= 11 in XCode.

### Android

Add app name and package name (\`applicationId\` from \`build.gradle\`). Add callback activity to \`AndroidManifest.xml\`:

\`\`\`xml
<activity android:name="com.linusu.flutter_web_auth_2.CallbackActivity" android:exported="true">
  <intent-filter android:label="flutter_web_auth_2">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="appwrite-callback-<PROJECT_ID>" />
  </intent-filter>
</activity>
\`\`\`

### Linux/Windows

Add app name and package name (from \`pubspec.yaml\`).

### macOS

Add app name and **Bundle ID**. Set macOS Deployment Target to >= 10.15 in XCode. Add URL scheme to \`Info.plist\`:

\`\`\`xml
<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.appwrite</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>appwrite-callback-<PROJECT_ID></string>
    </array>
</dict>
</array>
\`\`\`

## Step 3: Install Appwrite SDK

- Run: \`flutter pub add appwrite:17.0.0\`

## Step 4: Import and Initialize Appwrite

- File: \`lib/main.dart\`
- Replace \`<REGION>\` and \`<PROJECT_ID>\` with user-provided values:

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:appwrite/appwrite.dart';
import 'package:appwrite/models.dart' as models;

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Client client = Client()
      .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
      .setProject("<PROJECT_ID>");
  Account account = Account(client);

  runApp(MaterialApp(
    home: MyApp(account: account),
  ));
}

class MyApp extends StatefulWidget {
  final Account account;

  MyApp({required this.account});

  @override
  MyAppState createState() {
    return MyAppState();
  }
}
\`\`\`

## Step 5: Create Login Page

Append to \`lib/main.dart\` the following widget with login/register/logout functionality:

\`\`\`dart
class MyAppState extends State<MyApp> {
  models.User? loggedInUser;
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController nameController = TextEditingController();

  @override
  void initState() {
    super.initState();
    widget.account.get().then((user) {
      setState(() {
        loggedInUser = user;
      });
    }).catchError((_) {});
  }

  Future<void> login(String email, String password) async {
    await widget.account.createEmailPasswordSession(
      email: email,
      password: password,
    );
    final user = await widget.account.get();
    setState(() {
      loggedInUser = user;
    });
  }

  Future<void> register(String email, String password, String name) async {
    await widget.account.create(
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
    );
    await login(email, password);
  }

  Future<void> logout() async {
    await widget.account.deleteSession(sessionId: 'current');
    setState(() {
      loggedInUser = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(loggedInUser != null
                ? 'Logged in as \${loggedInUser!.name}'
                : 'Not logged in'),
            SizedBox(height: 16.0),
            TextField(
              controller: emailController,
              decoration: InputDecoration(labelText: 'Email'),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: passwordController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: nameController,
              decoration: InputDecoration(labelText: 'Name'),
            ),
            SizedBox(height: 16.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                ElevatedButton(
                  onPressed: () {
                    login(emailController.text, passwordController.text);
                  },
                  child: Text('Login'),
                ),
                SizedBox(width: 16.0),
                ElevatedButton(
                  onPressed: () {
                    register(emailController.text, passwordController.text,
                        nameController.text);
                  },
                  child: Text('Register'),
                ),
                SizedBox(width: 16.0),
                ElevatedButton(
                  onPressed: () {
                    logout();
                  },
                  child: Text('Logout'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

The page displays:

- "Logged in as \\<name>" when a session exists, otherwise "Not logged in"
- **Email**, **Password**, and **Name** text fields
- **Login**, **Register**, and **Logout** buttons

## Step 6: Run and Test

- Run: \`flutter run\`
- Select a browser, platform, or emulator to run your project.
- Test flows:
    - Register a new user and verify auto login works
    - Logout then login again
- Surface any Appwrite errors and fix by guiding updates to the endpoint/project ID and Console platform settings.

## Deliverables

- A running Flutter app with working Appwrite auth (register/login/logout)
- Files created/updated: \`pubspec.yaml\` (deps), \`lib/main.dart\`
- Platform-specific files if applicable: \`web/auth.html\` (Web), \`AndroidManifest.xml\` (Android), \`Info.plist\` (macOS)
`,A=`## Create a Go backend application integrated with Appwrite, with a working todo database that can create, seed, and retrieve data

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

## Step 1: Create project in Appwrite Console

- Head to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is the user's first time using Appwrite, guide them to create an account and create their first project.
- Under **Integrate with your server**, add an **API Key** with the following scopes:

| Category | Required scopes   | Purpose                                                 |
| -------- | ----------------- | ------------------------------------------------------- |
| Database | \`databases.write\` | Allows API key to create, update, and delete databases. |
|          | \`tables.write\`    | Allows API key to create, update, and delete tables.    |
|          | \`columns.write\`   | Allows API key to create, update, and delete columns.   |
|          | \`rows.read\`       | Allows API key to read rows.                            |
|          | \`rows.write\`      | Allows API key to create, update, and delete rows.      |

- Other scopes are optional.

## Step 2: Create Go project

- If you already have a Go project open, stay in it and use it.
- Otherwise, run:

\`\`\`sh
mkdir my-app
cd my-app
go mod init go-appwrite/main
\`\`\`

## Step 3: Install Appwrite SDK

- Run: \`go get github.com/appwrite/sdk-for-go\`

## Step 4: Import Appwrite and initialize client (ask user for details; never assume)

- Ask the user for:
    - **Project ID** (from Console -> Settings)
    - **API Key** (from Console -> View API Keys)
- Create file: \`app.go\` with the following code. Replace \`<PROJECT_KEY>\` with their project ID and \`<API_KEY>\` with their API key:

\`\`\`go
package main

import (
    "github.com/appwrite/sdk-for-go/appwrite"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
    "github.com/appwrite/sdk-for-go/models"
    "github.com/appwrite/sdk-for-go/query"
)

var (
    appwriteClient    client.Client
    todoDatabase      *models.Database
    todoTable    *models.Table
    tablesDB *tablesdb.TablesDB
)

func main() {
    appwriteClient = appwrite.NewClient(
        appwrite.WithProject("<PROJECT_KEY>"),
        appwrite.WithKey("<API_KEY>"),
    )
}
\`\`\`

## Step 5: Initialize database

- Add import for id: \`"github.com/appwrite/sdk-for-go/id"\`
- Add the \`prepareDatabase\` function to create a todo database and table with columns:

\`\`\`go
func prepareDatabase() {
    tablesDB = appwrite.NewTablesDB(appwriteClient)

    todoDatabase, _ = tablesDB.Create(
        id.Unique(),
        "TodosDB",
    )

    todoTable, _ = tablesDB.CreateTable(
        todoDatabase.Id,
        id.Unique(),
        "Todos",
    )

    tablesDB.CreateVarcharColumn(
        todoDatabase.Id,
        todoTable.Id,
        "title",
        255,
        true,
    )

    tablesDB.CreateTextColumn(
        todoDatabase.Id,
        todoTable.Id,
        "description",
        false,
    )

    tablesDB.CreateBooleanColumn(
        todoDatabase.Id,
        todoTable.Id,
        "isComplete",
        true,
    )
}
\`\`\`

## Step 6: Add rows (seed database)

- Add the \`seedDatabase\` function to insert mock todo data:

\`\`\`go
func seedDatabase() {
    testTodo1 := map[string]interface{}{
        "title":       "Buy apples",
        "description": "At least 2KGs",
        "isComplete":  true,
    }

    testTodo2 := map[string]interface{}{
        "title":      "Wash the apples",
        "isComplete": true,
    }

    testTodo3 := map[string]interface{}{
        "title":       "Cut the apples",
        "description": "Don't forget to pack them in a box",
        "isComplete":  false,
    }

    tablesDB.CreateRow(
        todoDatabase.Id,
        todoTable.Id,
        id.Unique(),
        testTodo1,
    )

    tablesDB.CreateRow(
        todoDatabase.Id,
        todoTable.Id,
        id.Unique(),
        testTodo2,
    )

    tablesDB.CreateRow(
        todoDatabase.Id,
        todoTable.Id,
        id.Unique(),
        testTodo3,
    )
}
\`\`\`

## Step 7: Retrieve rows

- Add \`Todo\` and \`TodoList\` structs:

\`\`\`go
type Todo struct {
    Title       string \`json:"title"\`
    Description string \`json:"description"\`
    IsComplete  bool   \`json:"isComplete"\`
}

type TodoList struct {
    *models.RowList
    Rows []Todo \`json:"rows"\`
}
\`\`\`

- Add \`getTodos\` function to retrieve all todos:

\`\`\`go
func getTodos() {
    todoResponse, _ := tablesDB.ListRows(
        todoDatabase.Id,
        todoTable.Id,
    )

    var todos TodoList
    todoResponse.Decode(&todos)

    fmt.Println("Todos:")
    for _, todo := range todos.Rows {
        fmt.Printf("Title: %s\\nDescription: %s\\nIs Todo Complete: %t\\n\\n", todo.Title, todo.Description, todo.IsComplete)
    }
}
\`\`\`

- Add \`getCompletedTodos\` function with query filtering:

\`\`\`go
func getCompletedTodos() {
    todoResponse, _ := tablesDB.ListRows(
        todoDatabase.Id,
        todoTable.Id,
        tablesDB.WithListRowsQueries([]string{
            query.Equal("isComplete", true),
            query.OrderDesc("$createdAt"),
            query.Limit(5),
        }),
    )

    var todos TodoList
    todoResponse.Decode(&todos)

    fmt.Println("Completed todos (limited to 5):")
    for _, todo := range todos.Rows {
        fmt.Printf("Title: %s\\nDescription: %s\\nIs Todo Complete: %t\\n\\n", todo.Title, todo.Description, todo.IsComplete)
    }
}
\`\`\`

- Add \`getIncompleteTodos\` function:

\`\`\`go
func getIncompleteTodos() {
    todoResponse, _ := tablesDB.ListRows(
        todoDatabase.Id,
        todoTable.Id,
        tablesDB.WithListRowsQueries([]string{
            query.Equal("isComplete", false),
            query.OrderAsc("title"),
        }),
    )

    var todos TodoList
    todoResponse.Decode(&todos)

    fmt.Println("Incomplete todos (ordered by title):")
    for _, todo := range todos.Rows {
        fmt.Printf("Title: %s\\nDescription: %s\\nIs Todo Complete: %t\\n\\n", todo.Title, todo.Description, todo.IsComplete)
    }
}
\`\`\`

## Step 8: Update main function and run

- Update \`main()\` to call all functions:

\`\`\`go
func main() {
    appwriteClient = appwrite.NewClient(
        appwrite.WithProject("<PROJECT_KEY>"),
        appwrite.WithKey("<API_KEY>"),
    )

    prepareDatabase()
    seedDatabase()
    getTodos()
    getCompletedTodos()
    getIncompleteTodos()
}
\`\`\`

- Add \`"fmt"\` to the imports
- Run: \`go run .\`
- View the response in the console

## Deliverables

- A running Go application with Appwrite integration
- Files created/updated: \`go.mod\`, \`go.sum\` (deps), \`app.go\`
- Working todo database with tables and columns
- Functions to create, seed, and query todo data with filtering capabilities
`,j=`## Create a Kotlin server-side application powered by Appwrite

Create a todo database, seed it with data, and retrieve the todos.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

_Note: This is for the Kotlin Server SDK, meant for server and backend applications. If the user wants to build a client-side Android app, direct them to the Android quickstart guide instead._

## Step 1: Create project in Appwrite Console

- Guide the user to the [Appwrite Console](https://cloud.appwrite.io/console)
- If this is their first time, help them create an account and their first project
- Under **Integrate with your server**, add an **API Key** with the following scopes:

| Category | Required scopes   | Purpose                                                |
| -------- | ----------------- | ------------------------------------------------------ |
| Database | \`databases.write\` | Allows API key to create, update, and delete databases |
|          | \`tables.write\`    | Allows API key to create, update, and delete tables    |
|          | \`columns.write\`   | Allows API key to create, update, and delete columns   |
|          | \`rows.read\`       | Allows API key to read rows                            |
|          | \`rows.write\`      | Allows API key to create, update, and delete rows      |

- Other scopes are optional

## Step 2: Create Kotlin project

- Open **IntelliJ IDEA** > **New Project** and create a Kotlin application
- Use **Gradle** as the build system with **Kotlin DSL** (Maven or IntelliJ build system also work)
- Follow the wizard and open the new project

## Step 3: Install Appwrite SDK

- Open \`build.gradle.kts\` and add the Appwrite dependency:

\`\`\`kotlin
dependencies {
    // ... other dependencies
    implementation("io.appwrite:sdk-for-kotlin:9.0.0")
}
\`\`\`

## Step 4: Import Appwrite and initialize the client

Ask the user for:

- **Cloud Region** (e.g. \`fra\`, \`nyc\`)
- **Project ID** (from Console > Settings)
- **API Key** (from Console > View API Keys)

_Never assume these values._

Open \`Main.kt\` and initialize the Appwrite Client:

\`\`\`kotlin
import io.appwrite.Client
import io.appwrite.ID
import io.appwrite.services.TablesDB
import io.appwrite.models.Database
import io.appwrite.models.Table
import kotlinx.coroutines.coroutineScope

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<YOUR_API_KEY>");
\`\`\`

- Replace placeholders with actual values if provided, otherwise ask user to provide them

## Step 5: Initialize database

- Create a function to configure a todo table:

\`\`\`kotlin
val tablesDB = TablesDB(client)

var todoDatabase: Database? = null
var todoTable: Table? = null

suspend fun prepareDatabase() {
    todoDatabase = tablesDB.create(ID.unique(), "TodosDB")
    todoTable = tablesDB.createTable(todoDatabase?.id!!, ID.unique(), "Todos")

    tablesDB.createVarcharColumn(
        databaseId = todoDatabase?.id!!,
        tableId = todoTable?.id!!,
        key = "title",
        size = 255,
        required = true
    )

    tablesDB.createTextColumn(
        databaseId = todoDatabase?.id!!,
        tableId = todoTable?.id!!,
        key = "description",
        required = false,
        default = "This is a test description."
    )

    tablesDB.createBooleanColumn(
        databaseId = todoDatabase?.id!!,
        tableId = todoTable?.id!!,
        key = "isComplete",
        required = true
    )
}
\`\`\`

## Step 6: Add rows (seed the database)

- Create a function to add mock data:

\`\`\`kotlin
suspend fun seedDatabase() {
    val testTodo1 = mapOf(
        "title" to "Buy apples",
        "description" to "At least 2KGs",
        "isComplete" to true
    )

    val testTodo2 = mapOf(
        "title" to "Wash the apples",
        "isComplete" to true
    )

    val testTodo3 = mapOf(
        "title" to "Cut the apples",
        "description" to "Don't forget to pack them in a box",
        "isComplete" to false
    )

    tablesDB.createRow(
        databaseId = todoDatabase?.id!!,
        tableId = todoTable?.id!!,
        rowId = ID.unique(),
        data = testTodo1
    )

    tablesDB.createRow(
        databaseId = todoDatabase?.id!!,
        tableId = todoTable?.id!!,
        rowId = ID.unique(),
        data = testTodo2
    )

    tablesDB.createRow(
        databaseId = todoDatabase?.id!!,
        tableId = todoTable?.id!!,
        rowId = ID.unique(),
        data = testTodo3
    )
}
\`\`\`

## Step 7: Retrieve rows

- Create a function to retrieve and display the todo data:

\`\`\`kotlin
suspend fun getTodos() {
    val todos = tablesDB.listRows(todoDatabase?.id!!, todoTable?.id!!)
    for (todo in todos.rows) {
        println(
            """
            Title: \${todo.data["title"]}
            Description: \${todo.data["description"]}
            Is Todo Complete: \${todo.data["isComplete"]}
            """.trimIndent()
        )
    }
}

suspend fun main() = coroutineScope {
    prepareDatabase()
    seedDatabase()
    getTodos()
}
\`\`\`

## Step 8: Run and test

- Run the project with **IntelliJ**
- View the response in the console
- Surface any Appwrite errors (invalid project, endpoint, API key) and fix by guiding updates to the client configuration

## Deliverables

- A running Kotlin application with Appwrite integration
- Files created/updated: \`build.gradle.kts\` (deps), \`Main.kt\` (client setup, database functions, main entry point)
- A **TodosDB** database with a **Todos** table containing \`title\`, \`description\`, and \`isComplete\` columns
- Three seeded todo rows displayed in the console output
`,M=`## Add Appwrite Auth to a New Next.js App

Add Appwrite auth to a new Next.js app (**App Router**) using the official Appwrite React library, with a working sign-up, sign-in, and sign-out flow backed by SSR session cookies.

- Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.
- Respect the user's package manager at all times. Do not use NPM if the user uses something else.

## Step 1: Create or use existing Next.js app

- First, check if the current working directory contains files that appear unrelated to a development workspace (e.g., personal files, downloads, random documents, media files). If so, ask the user: "This directory contains files that don't look like a development project. Would you like to proceed here anyway, or create a subdirectory with a specific folder name?"
- If the directory is empty OR contains an existing project (\`package.json\`, source code, config files, etc.), proceed with integration without asking.
- Create the project in the current working directory (\`.\`) - do NOT use \`cd\` to switch directories.
- If you already have a Next.js project open, stay in it and integrate Appwrite into it (**App Router** required).
- Otherwise, run: \`npx create-next-app@latest . --ts --app\`
- Accept the defaults for the remaining prompts.

## Step 2: Install the Appwrite React library

- Run: \`npm install @appwrite.io/react appwrite node-appwrite @tanstack/react-query\`

## Step 3: Configure environment variables

_Ask the user for details; never assume._

- Ask the user for:
    - **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API key** with scopes \`users.read\`, \`users.write\`, \`sessions.write\` (Console -> Overview -> Integrations -> API keys)
- Create a \`.env.local\` file at the project root:

\`\`\`sh
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<PROJECT_ID>
APPWRITE_API_KEY=<API_KEY>
\`\`\`

- The \`APPWRITE_API_KEY\` is server-only. Never expose it to the browser.

## Step 4: Mount the auth handler route

- Create \`app/api/appwrite/[...appwrite]/route.ts\` so the library's sign-in, sign-up, sign-out, and OAuth callback endpoints are reachable:

\`\`\`ts
import { createAppwriteHandlers } from '@appwrite.io/react/handlers/next';

export const { GET, POST } = createAppwriteHandlers({
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
    apiKey: process.env.APPWRITE_API_KEY!,
    basePath: '/api/appwrite'
});
\`\`\`

## Step 5: Wrap the app with AppwriteProvider

- Create \`app/providers.tsx\`:

\`\`\`tsx
'use client';

import { AppwriteProvider } from '@appwrite.io/react';

export function Providers({
    session,
    children
}: {
    session?: string | null;
    children: React.ReactNode;
}) {
    return (
        <AppwriteProvider
            endpoint={process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!}
            projectId={process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!}
            ssr={{ session, basePath: '/api/appwrite' }}
        >
            {children}
        </AppwriteProvider>
    );
}
\`\`\`

- Replace \`app/layout.tsx\` to read the session cookie server-side and pass it into the provider:

\`\`\`tsx
import { createNextServerHelpers } from '@appwrite.io/react/server/next';
import { Providers } from './providers';

const appwrite = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const helpers = createNextServerHelpers(appwrite);
    const session = await helpers.readSessionCookie();

    return (
        <html lang="en">
            <body>
                <Providers session={session}>{children}</Providers>
            </body>
        </html>
    );
}
\`\`\`

## Step 6: Build the auth page

- If this is a fresh project you just created, replace \`app/page.tsx\` to read the user server-side and render the auth panel. If you are working in an existing project, create a new route (e.g. \`app/auth/page.tsx\`) instead of overriding the default route.

\`\`\`tsx
import { createNextServerHelpers } from '@appwrite.io/react/server/next';
import { AuthPanel } from './auth-panel';

const appwrite = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!
};

export default async function Page() {
    const helpers = createNextServerHelpers(appwrite);
    const user = await helpers.getLoggedInUser();

    return (
        <main>
            <p>SSR user: {user?.email ?? 'signed out'}</p>
            <AuthPanel />
        </main>
    );
}
\`\`\`

- Create \`app/auth-panel.tsx\` for the client-side hook usage:

\`\`\`tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@appwrite.io/react';
import { useRouter } from 'next/navigation';

export function AuthPanel() {
    const { user, isLoading, signIn, signUp, signOut, error } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    if (isLoading) return <p>Loading...</p>;

    if (user) {
        return (
            <button onClick={() => signOut.signOut({ onSuccess: () => router.refresh() })}>
                Sign out
            </button>
        );
    }

    return (
        <div>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={() =>
                    signUp.emailPassword({
                        email,
                        password,
                        name,
                        onSuccess: () => router.refresh()
                    })
                }
            >
                Sign up
            </button>
            <button
                onClick={() =>
                    signIn.emailPassword({ email, password, onSuccess: () => router.refresh() })
                }
            >
                Sign in
            </button>
            {error && <p>{error.message}</p>}
        </div>
    );
}
\`\`\`

## Step 7: Verify environment

_Ask the user to confirm._

- Confirm \`.env.local\` has the endpoint, project ID, and API key set.
- Ensure the **Web** app platform exists in **Appwrite Console** with **Hostname** = \`localhost\`. If missing, guide the user to add it.

## Step 8: Run and test

- Run: \`npm run dev\`
- Open: \`http://localhost:3000\`
- Test flows:
    - Sign up a new user, confirm the SSR-rendered user reflects the change after \`router.refresh()\`
    - Sign out, then sign in again
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname, missing key scopes) and fix by guiding updates to \`.env.local\` and Console settings.

## Deliverables

- A running Next.js app with working Appwrite auth using \`@appwrite.io/react\`
- Files created/updated: \`package.json\` (deps), \`.env.local\`, \`app/api/appwrite/[...appwrite]/route.ts\`, \`app/providers.tsx\`, \`app/layout.tsx\`, \`app/page.tsx\`, \`app/auth-panel.tsx\`
`,N=`## Create a Node.js server backend application powered by Appwrite, with a working todo database that can create, seed, and query data

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all time. Don't use NPM if the user uses something else.

## Step 1: Create project in Appwrite Console

- Guide the user to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is their first time using Appwrite, they need to create an account and create their first project.
- Under **Integrate with your server**, add an **API Key** with the following scopes:

| Category | Required scopes   | Purpose                                                 |
| -------- | ----------------- | ------------------------------------------------------- |
| Database | \`databases.write\` | Allows API key to create, update, and delete databases. |
|          | \`tables.write\`    | Allows API key to create, update, and delete tables.    |
|          | \`columns.write\`   | Allows API key to create, update, and delete columns.   |
|          | \`rows.read\`       | Allows API key to read rows.                            |
|          | \`rows.write\`      | Allows API key to create, update, and delete rows.      |

- Other scopes are optional.

## Step 2: Create Node.js project

- Create a Node.js CLI application:

\`\`\`sh
mkdir my-app
cd my-app
npm init
\`\`\`

## Step 3: Install Appwrite SDK

- Run: \`npm install node-appwrite\`

## Step 4: Import Appwrite and initialize the client (ask user for details; never assume)

- Ask the user for:
    - Appwrite **Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API Key** (from Console -> View API Keys)
- Create file: \`app.js\` with the client initialization:

\`\`\`js
const sdk = require('node-appwrite');

const client = new sdk.Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<YOUR_API_KEY>');
\`\`\`

## Step 5: Initialize database

- Add a function to configure a todo table:

\`\`\`js
const tablesDB = new sdk.TablesDB(client);

var todoDatabase;
var todoTable;

async function prepareDatabase() {
    todoDatabase = await tablesDB.create({
        databaseId: sdk.ID.unique(),
        name: 'TodosDB'
    });

    todoTable = await tablesDB.createTable({
        databaseId: todoDatabase.$id,
        tableId: sdk.ID.unique(),
        name: 'Todos'
    });

    await tablesDB.createVarcharColumn({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        key: 'title',
        size: 255,
        required: true
    });

    await tablesDB.createTextColumn({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        key: 'description',
        required: false,
        default: 'This is a test description'
    });

    await tablesDB.createBooleanColumn({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        key: 'isComplete',
        required: true
    });
}
\`\`\`

## Step 6: Add rows (seed database)

- Add a function to add mock data into the table:

\`\`\`js
async function seedDatabase() {
    var testTodo1 = {
        title: 'Buy apples',
        description: 'At least 2KGs',
        isComplete: true
    };

    var testTodo2 = {
        title: 'Wash the apples',
        isComplete: true
    };

    var testTodo3 = {
        title: 'Cut the apples',
        description: "Don't forget to pack them in a box",
        isComplete: false
    };

    await tablesDB.createRow({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        rowId: sdk.ID.unique(),
        data: testTodo1
    });
    await tablesDB.createRow({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        rowId: sdk.ID.unique(),
        data: testTodo2
    });
    await tablesDB.createRow({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        rowId: sdk.ID.unique(),
        data: testTodo3
    });
}
\`\`\`

## Step 7: Retrieve rows

- Add functions to retrieve the mock todo data with queries:

\`\`\`js
const { Query } = require('node-appwrite');

async function getTodos() {
    // Retrieve rows (default limit is 25)
    var todos = await tablesDB.listRows({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id
    });

    console.log('Todos:');
    todos.rows.forEach((todo) => {
        console.log(
            \`Title: \${todo.title}\\nDescription: \${todo.description}\\nIs Todo Complete: \${todo.isComplete}\\n\\n\`
        );
    });
}

async function getCompletedTodos() {
    // Use queries to filter completed todos with pagination
    var todos = await tablesDB.listRows({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        queries: [Query.equal('isComplete', true), Query.orderDesc('$createdAt'), Query.limit(5)]
    });

    console.log('Completed todos (limited to 5):');
    todos.rows.forEach((todo) => {
        console.log(
            \`Title: \${todo.title}\\nDescription: \${todo.description}\\nIs Todo Complete: \${todo.isComplete}\\n\\n\`
        );
    });
}

async function getIncompleteTodos() {
    // Query for incomplete todos
    var todos = await tablesDB.listRows({
        databaseId: todoDatabase.$id,
        tableId: todoTable.$id,
        queries: [Query.equal('isComplete', false), Query.orderAsc('title')]
    });

    console.log('Incomplete todos (ordered by title):');
    todos.rows.forEach((todo) => {
        console.log(
            \`Title: \${todo.title}\\nDescription: \${todo.description}\\nIs Todo Complete: \${todo.isComplete}\\n\\n\`
        );
    });
}

async function runAllTasks() {
    await prepareDatabase();
    await seedDatabase();
    await getTodos();
    await getCompletedTodos();
    await getIncompleteTodos();
}
runAllTasks();
\`\`\`

## Step 8: Optional: Type safety with TypeScript

- For better type safety in TypeScript projects, define interfaces and use generics:

\`\`\`ts
interface Todo {
    title: string;
    description: string;
    isComplete: boolean;
}

import { Client, TablesDB } from 'node-appwrite';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const tablesDB = new TablesDB(client);

// Type-safe database operations
async function getTodos() {
    const todos = await tablesDB.listRows<Todo>({
        databaseId: '<DATABASE_ID>',
        tableId: '<TABLE_ID>'
    });

    todos.rows.forEach((todo) => {
        console.log(\`Title: \${todo.title} - Complete: \${todo.isComplete}\`);
    });
}
\`\`\`

- Optionally use the Appwrite CLI to generate TypeScript interfaces automatically: \`appwrite types ./types\`

## Step 9: Run and test

- Run: \`node app.js\`
- View the response in your console
- The output should show:
    - All todos
    - Completed todos (limited to 5)
    - Incomplete todos (ordered by title)
- Surface any Appwrite errors (invalid project, endpoint, API key) and fix by guiding updates to \`app.js\` and Console settings.

## Deliverables

- A running Node.js CLI app with working Appwrite database (create database, seed data, query rows)
- Files created/updated: \`package.json\` (deps), \`app.js\`
`,P=`## Add Appwrite Auth to a New Nuxt App

Goal: Add Appwrite auth to a new Nuxt app with a working login/register/logout page.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect the user's package manager at all times. Do not use NPM if the user uses something else.

## Step 1: Create or Use Existing Nuxt App

- First, check if the current working directory contains files that appear unrelated to a development workspace (e.g., personal files, downloads, random documents, media files). If such files are detected, ask the user: "This directory contains files that don't appear to be part of a development project. Would you like to: (1) proceed here anyway, or (2) create a subdirectory with a specific folder name?"
- If the directory is empty OR contains an existing project (e.g., \`package.json\`, \`node_modules\`, \`src\` folder, config files), proceed with integration without asking - just use the existing project.
- For new projects, run: \`npx nuxi@latest init .\`
- Always create the project in the current directory (\`.\`) - do NOT use \`cd\` to switch directories.

## Step 2: Install Appwrite SDK

- Run: \`npm install appwrite\`

## Step 3: Create Appwrite Client Module (Ask User for Details; Never Assume)

- Ask the user for:
    - **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
- Hardcode the endpoint and project ID in the file \`utils/appwrite.js\` if provided, else leave a placeholder and ask the user to provide them.
- Create file \`utils/appwrite.js\` with key snippet:

\`\`\`js
import { Client, Account } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://<REGION>.cloud.appwrite.io/v1').setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
\`\`\`

## Step 4: Build the Login Page

- If this is a fresh project, you may replace \`app.vue\` with a component that renders the auth UI.
- If you are working in an existing project, add a new page instead of overriding \`app.vue\`.
- The component should render:
    - Email/password inputs
    - Name input for registration
    - Buttons: **Login**, **Register**, **Logout**
    - Shows "Logged in as \\<name\\>" when a session exists, otherwise "Not logged in"
- Implement functions:
    - \`login(email, password)\`: \`account.createEmailPasswordSession({ email, password })\` then set user via \`account.get()\`
    - \`register()\`: \`account.create({ userId: ID.unique(), email, password, name })\` then call \`login\`
    - \`logout()\`: \`account.deleteSession({ sessionId: 'current' })\` then clear user state
- Use Vue 3 Composition API with \`<script setup>\` and \`ref\` for reactive state
- Key snippet for \`app.vue\`:

\`\`\`html
<script setup>
    import { ref } from 'vue';
    import { account, ID } from './utils/appwrite.js';

    const loggedInUser = ref(null);
    const email = ref('');
    const password = ref('');
    const name = ref('');

    const login = async (email, password) => {
        await account.createEmailPasswordSession({
            email,
            password
        });
        loggedInUser.value = await account.get();
    };

    const register = async () => {
        await account.create({
            userId: ID.unique(),
            email: email.value,
            password: password.value,
            name: name.value
        });
        await login(email.value, password.value);
    };

    const logout = async () => {
        await account.deleteSession({ sessionId: 'current' });
        loggedInUser.value = null;
    };
<\/script>

<template>
    <div>
        <p>{{ loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in' }}</p>

        <form>
            <input type="email" placeholder="Email" v-model="email" />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="text" placeholder="Name" v-model="name" />
            <button type="button" @click="login(email, password)">Login</button>
            <button type="button" @click="register">Register</button>
            <button type="button" @click="logout">Logout</button>
        </form>
    </div>
</template>
\`\`\`

## Step 5: Verify Environment (Ask User to Confirm)

- Confirm endpoint and project ID are set in \`utils/appwrite.js\`.
- Ensure the Web app platform exists in Appwrite Console with **Hostname** = \`localhost\`. If missing, guide the user to add it.

## Step 6: Run and Test

- Run: \`npm run dev -- --open --port 3000\`
- Open: \`http://localhost:3000\`
- Test flows:
    - Register a new user and auto login works
    - Logout then login again
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to \`utils/appwrite.js\` and Console settings.

## Deliverables

- A running Nuxt app with working Appwrite auth (register/login/logout)
- Files created/updated: \`package.json\` (deps), \`utils/appwrite.js\`, \`app.vue\`
`,F=`## Create a PHP CLI application that connects to Appwrite and performs database operations

Create a PHP CLI application that connects to Appwrite and performs database operations (create database, table, columns, and rows).

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

## Step 1: Create project in Appwrite Console

- Guide the user to the **Appwrite Console** (https://cloud.appwrite.io/console).
- If this is their first time, have them create an account and project.
- Under **Integrate with your server**, add an **API Key** with the following scopes:

| Category | Required scopes   | Purpose                                                 |
| -------- | ----------------- | ------------------------------------------------------- |
| Database | \`databases.write\` | Allows API key to create, update, and delete databases. |
|          | \`tables.write\`    | Allows API key to create, update, and delete tables.    |
|          | \`columns.write\`   | Allows API key to create, update, and delete columns.   |
|          | \`rows.read\`       | Allows API key to read rows.                            |
|          | \`rows.write\`      | Allows API key to create, update, and delete rows.      |

## Step 2: Create PHP project

- Create a PHP CLI application:

\`\`\`sh
mkdir my-app
cd my-app
composer init
\`\`\`

## Step 3: Install Appwrite SDK

- Run: \`composer require appwrite/appwrite:15.0.0\`

## Step 4: Import Appwrite and initialize client (ask user for details; never assume)

- Ask the user for:
    - **Appwrite Cloud Region** (e.g., \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API Key** (from View API Keys button in Settings)
- Create file: \`index.php\` with key snippet:

\`\`\`php
<?php
require_once 'vendor/autoload.php';

use Appwrite\\Client;
use Appwrite\\Services\\TablesDB;
use Appwrite\\ID;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    ->setProject('<PROJECT_ID>')
    ->setKey('<YOUR_API_KEY>');
\`\`\`

## Step 5: Initialize database

- Add a function to configure a todo table:

\`\`\`php
$tablesDB = new TablesDB($client);

function prepareDatabase($tablesDB) {
    $todoDatabase = $tablesDB->create(
        databaseId: ID::unique(),
        name: 'TodosDB'
    );

    $todoTable = $tablesDB->createTable(
        databaseId: $todoDatabase['$id'],
        tableId: ID::unique(),
        name: 'Todos'
    );

    $tablesDB->createVarcharColumn(
        databaseId: $todoDatabase['$id'],
        tableId: $todoTable['$id'],
        key: 'title',
        size: 255,
        required: true
    );

    $tablesDB->createTextColumn(
        databaseId: $todoDatabase['$id'],
        tableId: $todoTable['$id'],
        key: 'description',
        required: false,
    );

    $tablesDB->createBooleanColumn(
        databaseId: $todoDatabase['$id'],
        tableId: $todoTable['$id'],
        key: 'isComplete',
        required: true
    );

    return [$todoDatabase, $todoTable];
}
\`\`\`

## Step 6: Add rows

- Add a function to insert mock todo data:

\`\`\`php
function seedDatabase($tablesDB, $todoDatabase, $todoTable) {
    $testTodo1 = [
        'title' => 'Buy apples',
        'description' => 'At least 2KGs',
        'isComplete' => true
    ];

    $testTodo2 = [
        'title' => 'Wash the apples',
        'isComplete' => true
    ];

    $testTodo3 = [
        'title' => 'Cut the apples',
        'description' => 'Don\\'t forget to pack them in a box',
        'isComplete' => false
    ];

    $tablesDB->createRow(
        $todoDatabase['$id'],
        $todoTable['$id'],
        ID::unique(),
        $testTodo1
    );

    $tablesDB->createRow(
        $todoDatabase['$id'],
        $todoTable['$id'],
        ID::unique(),
        $testTodo2
    );

    $tablesDB->createRow(
        $todoDatabase['$id'],
        $todoTable['$id'],
        ID::unique(),
        $testTodo3
    );
}
\`\`\`

## Step 7: Retrieve rows

- Add functions to retrieve and display todos with queries:

\`\`\`php
use Appwrite\\Query;

function getTodos($tablesDB, $todoDatabase, $todoTable) {
    // Retrieve rows (default limit is 25)
    $todos = $tablesDB->listRows(
        $todoDatabase['$id'],
        $todoTable['$id']
    );

    echo "Todos:\\n";
    foreach ($todos['rows'] as $todo) {
        echo "Title: {$todo['title']}\\n" .
            "Description: {$todo['description']}\\n" .
            "Is Todo Complete: {$todo['isComplete']}\\n\\n";
   }
}

function getCompletedTodos($tablesDB, $todoDatabase, $todoTable) {
    // Use queries to filter completed todos with pagination
    $todos = $tablesDB->listRows(
        $todoDatabase['$id'],
        $todoTable['$id'],
        [
            Query::equal('isComplete', true),
            Query::orderDesc('$createdAt'),
            Query::limit(5)
        ]
    );

    echo "Completed todos (limited to 5):\\n";
    foreach ($todos['rows'] as $todo) {
        echo "Title: {$todo['title']}\\n" .
            "Description: {$todo['description']}\\n" .
            "Is Todo Complete: {$todo['isComplete']}\\n\\n";
   }
}

function getIncompleteTodos($tablesDB, $todoDatabase, $todoTable) {
    // Query for incomplete todos
    $todos = $tablesDB->listRows(
        $todoDatabase['$id'],
        $todoTable['$id'],
        [
            Query::equal('isComplete', false),
            Query::orderAsc('title')
        ]
    );

    echo "Incomplete todos (ordered by title):\\n";
    foreach ($todos['rows'] as $todo) {
        echo "Title: {$todo['title']}\\n" .
            "Description: {$todo['description']}\\n" .
            "Is Todo Complete: {$todo['isComplete']}\\n\\n";
   }
}

function runAllTasks($tablesDB) {
    [$todoDatabase, $todoTable] = prepareDatabase($tablesDB);
    seedDatabase($tablesDB, $todoDatabase, $todoTable);
    getTodos($tablesDB, $todoDatabase, $todoTable);
    getCompletedTodos($tablesDB, $todoDatabase, $todoTable);
    getIncompleteTodos($tablesDB, $todoDatabase, $todoTable);
}

runAllTasks($tablesDB);
\`\`\`

## Step 8: Run and test

- Run: \`php src/index.php\`
- View the response in the console showing all todos, completed todos, and incomplete todos.
- Surface any Appwrite errors (invalid project, endpoint, API key) and fix by guiding updates to \`index.php\` and Console settings.

## Deliverables

- A running PHP CLI application with working Appwrite database operations
- Files created/updated: \`composer.json\` (deps), \`index.php\`
`,I=`## Create a Python app with Appwrite server integration

Create a Python app with Appwrite server integration that creates a todo database, seeds it with data, and retrieves rows.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

## Step 1: Create project in Appwrite Console

- If this is the user's first time using Appwrite, guide them to create an account and project at https://cloud.appwrite.io/console
- Under **Integrate with your server**, add an **API Key** with the following scopes:

| Category | Required scopes   | Purpose                                                |
| -------- | ----------------- | ------------------------------------------------------ |
| Database | \`databases.write\` | Allows API key to create, update, and delete databases |
|          | \`tables.write\`    | Allows API key to create, update, and delete tables    |
|          | \`columns.write\`   | Allows API key to create, update, and delete columns   |
|          | \`rows.read\`       | Allows API key to read rows                            |
|          | \`rows.write\`      | Allows API key to create, update, and delete rows      |

- Other scopes are optional.

## Step 2: Create Python project

- Create a directory for the project:

\`\`\`sh
mkdir my_app
cd my_app
\`\`\`

- Create a virtual environment and activate it:

\`\`\`sh
# Create a venv
python -m venv .venv

# Active the venv in Unix shell
source .venv/bin/activate

# Or in Powershell
.venv/Scripts/Activate.ps1
\`\`\`

- Create a file named \`my_app.py\`

## Step 3: Install Appwrite SDK

- Run: \`pip install appwrite==13.6.1\`

## Step 4: Import Appwrite and initialize client (ask user for details; never assume)

- Ask the user for:
    - Appwrite Cloud Region (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API Key** (from Console -> View API Keys)
- Open \`my_app.py\` and initialize the Appwrite Client:

\`\`\`py
from appwrite.client import Client
from appwrite.services.tables_db import TablesDB
from appwrite.id import ID

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1')
client.set_project('<PROJECT_ID>')
client.set_key('<YOUR_API_KEY>')
\`\`\`

## Step 5: Initialize database

- Create a function to configure a todo table:

\`\`\`py
tablesDB = TablesDB(client)

todoDatabase = None
todoTable = None

def prepare_database():
  global todoDatabase
  global todoTable

  todoDatabase = tablesDB.create(
    database_id=ID.unique(),
    name='TodosDB'
  )

  todoTable = tablesDB.create_table(
    database_id=todoDatabase['$id'],
    table_id=ID.unique(),
    name='Todos'
  )

  tablesDB.create_varchar_column(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id'],
    key='title',
    size=255,
    required=True
  )

  tablesDB.create_text_column(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id'],
    key='description',
    required=False,
    default='This is a test description.'
  )

  tablesDB.create_boolean_column(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id'],
    key='isComplete',
    required=True
  )
\`\`\`

## Step 6: Add rows

- Create a function to add mock data into the table:

\`\`\`py
def seed_database():
  testTodo1 = {
    'title': "Buy apples",
    'description': "At least 2KGs",
    'isComplete': True
  }

  testTodo2 = {
    'title': "Wash the apples",
    'isComplete': True
  }

  testTodo3 = {
    'title': "Cut the apples",
    'description': "Don\\'t forget to pack them in a box",
    'isComplete': False
  }

  tablesDB.create_row(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id'],
    row_id=ID.unique(),
    data=testTodo1
  )

  tablesDB.create_row(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id'],
    row_id=ID.unique(),
    data=testTodo2
  )

  tablesDB.create_row(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id'],
    row_id=ID.unique(),
    data=testTodo3
  )
\`\`\`

## Step 7: Retrieve rows

- Create functions to retrieve the mock todo data and execute them in \`__main__\`:

\`\`\`py
from appwrite.query import Query

def get_todos():
  # Retrieve rows (default limit is 25)
  todos = tablesDB.list_rows(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id']
  )
  print("Todos:")
  for todo in todos['rows']:
    print(f"Title: {todo['title']}\\nDescription: {todo['description']}\\nIs Todo Complete: {todo['isComplete']}\\n\\n")

def get_completed_todos():
  # Use queries to filter completed todos with pagination
  todos = tablesDB.list_rows(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id'],
    queries=[
      Query.equal("isComplete", True),
      Query.order_desc("$createdAt"),
      Query.limit(5)
    ]
  )
  print("Completed todos (limited to 5):")
  for todo in todos['rows']:
    print(f"Title: {todo['title']}\\nDescription: {todo['description']}\\nIs Todo Complete: {todo['isComplete']}\\n\\n")

def get_incomplete_todos():
  # Query for incomplete todos
  todos = tablesDB.list_rows(
    database_id=todoDatabase['$id'],
    table_id=todoTable['$id'],
    queries=[
      Query.equal("isComplete", False),
      Query.order_asc("title")
    ]
  )
  print("Incomplete todos (ordered by title):")
  for todo in todos['rows']:
    print(f"Title: {todo['title']}\\nDescription: {todo['description']}\\nIs Todo Complete: {todo['isComplete']}\\n\\n")

if __name__ == "__main__":
  prepare_database()
  seed_database()
  get_todos()
  get_completed_todos()
  get_incomplete_todos()
\`\`\`

## Step 8: Run and test

- Run: \`python my_app.py\`
- View the response in your console
- Verify the todos are printed correctly including:
    - All todos
    - Completed todos (limited to 5)
    - Incomplete todos (ordered by title)

## Deliverables

- A running Python app with working Appwrite server integration
- Files created: \`my_app.py\`
- A **TodosDB** database with a **Todos** table containing \`title\`, \`description\`, and \`isComplete\` columns
- Three seeded todo rows with the ability to query and filter them
`,L=`## Add Appwrite Auth to a New React (Vite) App

Goal: Add Appwrite auth to a new React (Vite) app using the official Appwrite React library, with a working sign-up, sign-in, and sign-out flow.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all time. Don't use NPM if the user uses something else.

## Step 1: Check Current Directory and Set Up React App

- First, check if the current working directory contains files that appear unrelated to a development workspace (e.g., personal files, downloads, random documents, media files).
- If unrelated files are detected, ask the user: 'The current directory appears to contain personal or non-project files. Would you like to: (1) proceed here anyway, or (2) create the project in a subdirectory with a specific folder name?' and proceed based on their choice.
- If the directory is empty OR contains an existing project (\`package.json\`, source files, config files, etc.), proceed without asking - integrate Appwrite into whatever is there.
- For a new project, run: \`npm create vite@latest . -- --template react-ts\`
- Create the project in the current directory (\`.\`). Do NOT use \`cd\` to switch directories.

## Step 2: Install the Appwrite React library

- Run: \`npm install @appwrite.io/react appwrite @tanstack/react-query\`

## Step 3: Configure environment variables (Ask User for Details; Never Assume)

- Ask the user for:
    - Appwrite Cloud Region (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
- Create a \`.env\` file at the project root with the values provided. If either is missing, leave a placeholder and ask the user to fill it in:

\`\`\`sh
VITE_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=<PROJECT_ID>
\`\`\`

## Step 4: Mount AppwriteProvider

- Replace \`src/main.tsx\` (or \`.jsx\`) so the entire app is wrapped with \`AppwriteProvider\`:

\`\`\`tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppwriteProvider } from '@appwrite.io/react';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppwriteProvider
            endpoint={import.meta.env.VITE_APPWRITE_ENDPOINT}
            projectId={import.meta.env.VITE_APPWRITE_PROJECT_ID}
        >
            <App />
        </AppwriteProvider>
    </StrictMode>
);
\`\`\`

## Step 5: Build the auth page

- If this is a fresh project, you may replace \`src/App.tsx\` (or \`.jsx\`) with a component that renders the auth UI.
- If you are working in an existing project, add a new route/page instead of overriding the default route. If routing is not set up, install \`react-router-dom\` and add an \`/auth\` route that renders this component.
- The component must render:
    - Email, password, and name inputs
    - Buttons: **Sign up**, **Sign in**, **Sign out**
    - Shows "Welcome, \\<name\\>" when a session exists
- Use the \`useAuth\` hook from \`@appwrite.io/react\`:

\`\`\`tsx
import { useState } from 'react';
import { useAuth } from '@appwrite.io/react';

export default function App() {
    const { user, isLoading, signIn, signUp, signOut, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    if (isLoading) return <p>Loading...</p>;

    if (user) {
        return (
            <main>
                <p>Welcome, {user.name || user.email}</p>
                <button onClick={() => signOut.signOut()}>Sign out</button>
            </main>
        );
    }

    return (
        <main>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => signUp.emailPassword({ email, password, name })}>Sign up</button>
            <button onClick={() => signIn.emailPassword({ email, password })}>Sign in</button>
            {error && <p>{error.message}</p>}
        </main>
    );
}
\`\`\`

## Step 6: Verify environment (Ask User to Confirm)

- Confirm the \`.env\` file contains the correct endpoint and project ID.
- Ensure the Web app platform exists in Appwrite Console with **Hostname** = \`localhost\`. If missing, guide the user to add it.

## Step 7: Run and test

- Run: \`npm run dev\`
- Open: \`http://localhost:5173\`
- Test flows:
    - Sign up a new user and confirm the page shows the welcome state
    - Sign out, then sign in again
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to \`.env\` and Console settings.

## Deliverables

- A running React app with working Appwrite auth using \`@appwrite.io/react\`
- Files created/updated: \`package.json\` (deps), \`.env\`, \`src/main.tsx\`, \`src/App.tsx\`
`,R=`## Add Appwrite auth to a new React Native (Expo) app with a minimal login/register/logout UI

- Never assume project details. Ask the user for **Cloud Region**, **Project ID**, and package/bundle ID.
- Use explicit config (no hardcoding in code except reading constants/env the user sets).
- Respect the user's package manager and Expo workflow.

## Step 1: Scaffold or use existing Expo app

- If you already have an Expo project open, stay in it and use it.
- Otherwise, run: \`npx create-expo-app my-app && cd my-app\`

## Step 2: Install SDK and polyfills

- Run: \`npx expo install react-native-appwrite react-native-url-polyfill\`

## Step 3: Configure identifiers (ask user)

- Ask user for **Android package name** and **iOS bundle identifier**. Guide them to set these in \`app.json\`.
- Ask for **Cloud Region** and **Project ID** from Console -> Settings.

## Step 4: Client setup (key snippet)

- File: \`app/lib/appwrite.ts\` (or \`.js\`)

\`\`\`ts
import 'react-native-url-polyfill/auto';
import { Client, Account, ID } from 'react-native-appwrite';

const endpoint = 'https://<REGION>.cloud.appwrite.io/v1'; // ask user for <REGION>
const project = '<PROJECT_ID>'; // ask user for ID
const platform = '<PACKAGE_OR_BUNDLE_ID>'; // ask user for this

const client = new Client().setEndpoint(endpoint).setProject(project).setPlatform(platform);
export const account = new Account(client);
export { ID };
\`\`\`

## Step 5: UI wiring (idea + key snippets)

- If this is a fresh project, you can reuse the default entry screen (e.g., \`app/(tabs)/index.tsx\`).
- If you are adding to an existing project, create a new screen/route (e.g., \`app/auth.tsx\` or a new tab/stack screen) instead of overriding the current default route.
- Screen file example:

\`\`\`tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { account, ID } from '../lib/appwrite';

export default function AuthScreen() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function login(e: string, p: string) {
        await account.createEmailPasswordSession({ email: e, password: p });
        setUser(await account.get());
    }

    async function register() {
        await account.create({ userId: ID.unique(), email, password, name });
        await login(email, password);
    }

    async function logout() {
        await account.deleteSession({ sessionId: 'current' });
        setUser(null);
    }

    return (
        <View>
            {user ? <Text>Logged in as {user.name}</Text> : null}
            <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <TextInput value={name} onChangeText={setName} placeholder="Name" />
            <TouchableOpacity onPress={() => login(email, password)}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={register}>
                <Text>Register</Text>
            </TouchableOpacity>
            {user && (
                <TouchableOpacity onPress={logout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
\`\`\`

- Minimal JSX: display user name when logged in; inputs for email/password/name; buttons for **Login**/**Register**/**Logout**.

## Step 6: Verify platforms

- Ask user to add **Android** and/or **iOS** platform in Console. Use the configured package/bundle identifiers.

## Step 7: Run and test

- Run: \`npx expo start\`
- Test register -> auto login -> logout -> login.

## Deliverables

- \`app/lib/appwrite.ts\`, updated screen with minimal form and actions
`,z=`## Add Appwrite to a new Refine app with a working login/register page using the Refine-Appwrite preset

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all time. Don't use NPM if the user uses something else.

## Step 1: Create Appwrite project

- Guide the user to head to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is their first time using Appwrite, create an account and create their first project.
- Under **Add a platform**, add a **Web app** with **Hostname** = \`localhost\`.
- Optional steps can be skipped.

## Step 2: Create Refine project

- Before scaffolding, check if the current working directory contains files that appear unrelated to a development workspace (e.g., personal files, downloads, random documents, media files). If so, ask the user: 'The current directory contains files that don't appear to be part of a development project. Would you like to: (1) proceed here anyway, or (2) create it in a subdirectory with a specific folder name?' and proceed based on their choice.
- If the directory is empty OR contains an existing project (e.g., \`package.json\`, \`src\` folder, config files), proceed with integration without asking.
- Run: \`npm create refine-app@latest . -- --preset refine-appwrite\`
- Create the project in the current working directory (\`.\`) - do NOT use \`cd\` to switch directories.
- This preset includes Appwrite support out of the box.

## Step 3: Install Appwrite (for existing projects only)

- Using the \`refine-appwrite\` preset eliminates the need for extra dependencies for a quick start.
- If integrating into an existing Refine app, run: \`npm install @refinedev/appwrite\`
- Then follow the Refine documentation: https://refine.dev/docs/packages/documentation/data-providers/appwrite

## Step 4: Configure Appwrite client (ask user for details; never assume)

- Ask the user for:
    - **Appwrite API Endpoint** (e.g. \`https://cloud.appwrite.io/v1\`)
    - **Project ID** (from Console -> Settings)
- Navigate to \`src/utility/appwriteClient.ts\` and add API credentials:

\`\`\`ts
import { Account, Appwrite, Storage } from '@refinedev/appwrite';

const APPWRITE_URL = '<YOUR_API_ENDPOINT>'; // Replace with your Appwrite API Endpoint
const APPWRITE_PROJECT = '<PROJECT_ID>'; // Replace with your project ID

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { account, appwriteClient, storage };
\`\`\`

## Step 5: Create a login page

- Replace the code in \`src/App.tsx\` with the following:

\`\`\`tsx
import { Authenticated, Refine } from '@refinedev/core';
import { dataProvider, liveProvider } from '@refinedev/appwrite';
import {
    AuthPage,
    ErrorComponent,
    RefineThemes,
    ThemedLayoutV2,
    useNotificationProvider
} from '@refinedev/antd';
import routerProvider, { CatchAllNavigate } from '@refinedev/react-router-v6';
import '@refinedev/antd/dist/reset.css';

import { App as AntdApp, ConfigProvider } from 'antd';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { appwriteClient } from './utility';
import { authProvider } from './authProvider';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <AntdApp>
                    <Refine
                        dataProvider={dataProvider(appwriteClient, {
                            databaseId: '<APPWRITE_DATABASE_ID>'
                        })}
                        liveProvider={liveProvider(appwriteClient, {
                            databaseId: '<APPWRITE_DATABASE_ID>'
                        })}
                        authProvider={authProvider}
                        routerProvider={routerProvider}
                        notificationProvider={useNotificationProvider}
                    >
                        <Routes>
                            <Route
                                element={
                                    <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            ></Route>

                            <Route
                                element={
                                    <Authenticated fallback={<Outlet />}>
                                        <Navigate to="/" />
                                    </Authenticated>
                                }
                            >
                                <Route path="/login" element={<AuthPage />} />
                                <Route path="/register" element={<AuthPage type="register" />} />
                            </Route>

                            <Route
                                element={
                                    <Authenticated>
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            >
                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                    </Refine>
                </AntdApp>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;
\`\`\`

- Ask the user for their **Appwrite Database ID** to replace the \`<APPWRITE_DATABASE_ID>\` placeholder.

## Step 6: Run and test

- Run: \`npm run dev -- --open --port 3000\`
- Open: \`http://localhost:3000\`
- Test flows:
    - Navigate to \`/login\` page
    - Navigate to \`/register\` page to create a new user
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to \`appwriteClient.ts\` and Console settings.

## Deliverables

- A running Refine app with Appwrite integration and login/register pages
- Files created/updated: \`package.json\` (deps), \`src/utility/appwriteClient.ts\`, \`src/App.tsx\`
`,ae=`## Create a Ruby CLI application powered by Appwrite that creates a database, adds todo data, and retrieves it

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

## Step 1: Create project in Appwrite Console

- Guide the user to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is their first time, they need to create an account and create their first project.
- Under **Integrate with your server**, add an **API Key** with the following scopes:
    - Database: \`databases.write\`, \`tables.write\`, \`columns.write\`, \`rows.read\`, \`rows.write\`
- Ask the user for:
    - **Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API Key** (from View API Keys button)
- If the user doesn't know these values, guide them to the Appwrite Console to find them.

## Step 2: Create Ruby project

- If you already have a Ruby project open, stay in it and use it.
- Otherwise, create a new Ruby CLI application:

\`\`\`sh
mkdir my-app
cd my-app
bundle init
\`\`\`

## Step 3: Install Appwrite SDK

- Run: \`bundle add appwrite\`

## Step 4: Create Appwrite client file

- Create file: \`app.rb\` with the following code (replace placeholders with user-provided values):

\`\`\`ruby
# Initialize the Appwrite client
require 'appwrite'

include Appwrite

client = Client.new()

client
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your Appwrite Endpoint
    .set_project('<PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key
\`\`\`

## Step 5: Initialize database

- Add a function to configure a todo table:

\`\`\`ruby
tablesDB = TablesDB.new(client)

todo_database = nil
todo_table = nil

def prepare_database(databases)
    todo_database = tablesDB.create(
        database_id: ID.unique(),
        name: 'TodosDB'
    )

    todo_table = tablesDB.create_table(
        database_id: todo_database.id,
        table_id: ID.unique(),
        name: 'Todos'
    )

    tablesDB.create_varchar_column(
        database_id: todo_database.id,
        table_id: todo_table.id,
        key: 'title',
        size: 255,
        required: true
    )

    tablesDB.create_text_column(
        database_id: todo_database.id,
        table_id: todo_table.id,
        key: 'description',
        required: false
    )

    tablesDB.create_boolean_column(
        database_id: todo_database.id,
        table_id: todo_table.id,
        key: 'isComplete',
        required: false,
        default: false
    )
    return todo_database, todo_table
end
\`\`\`

## Step 6: Add rows

- Add a function to seed mock data into the table:

\`\`\`ruby
def seed_database(databases, todo_database, todo_table)
    test_todo1 = {
        title: 'Buy apples',
        description: 'At least 2KGs',
        isComplete: true
    }

    test_todo2 = {
        title: 'Wash the apples',
        isComplete: true
    }

    test_todo3 = {
        title: 'Cut the apples',
        description: 'Don\\'t forget to pack them in a box',
        isComplete: false
    }

    tablesDB.create_row(
        database_id: todo_database.id,
        table_id: todo_table.id,
        row_id: ID.unique(),
        data: test_todo1
    )

    tablesDB.create_row(
        database_id: todo_database.id,
        table_id: todo_table.id,
        row_id: ID.unique(),
        data: test_todo2
    )

    tablesDB.create_row(
        database_id: todo_database.id,
        table_id: todo_table.id,
        row_id: ID.unique(),
        data: test_todo3
    )
end
\`\`\`

## Step 7: Retrieve rows

- Add functions to retrieve the mock todo data and execute all tasks:

\`\`\`ruby
def get_todos(databases, todo_database, todo_table)
    todos = tablesDB.list_rows(
        database_id: todo_database.id,
        table_id: todo_table.id
    )

    todos.rows.each do |todo|
        puts "Title: #{todo.data['title']}\\nDescription: #{todo.data['description']}\\nIs Todo Complete: #{todo.data['isComplete']}\\n\\n"
    end
end

def run_all_tasks(databases)
    todo_database, todo_table = prepare_database(databases)
    seed_database(databases, todo_database, todo_table)
    get_todos(databases, todo_database, todo_table)
end

run_all_tasks(databases)
\`\`\`

## Step 8: Run and test

- Run: \`ruby app.rb\`
- View the response in the console.
- Verify that the todo data is displayed correctly with titles, descriptions, and completion status.
- Surface any Appwrite errors (invalid project, endpoint, API key) and fix by guiding updates to \`app.rb\` and Console settings.

## Deliverables

- A running Ruby CLI app with working Appwrite database integration (create database, add rows, retrieve rows)
- Files created/updated: \`Gemfile\` (deps), \`app.rb\`
`,B=`## Create a Rust app with Appwrite server integration

Create a Rust app with Appwrite server integration that creates a todo database, seeds it with data, and retrieves rows.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

## Step 1: Create project in Appwrite Console

- If this is the user's first time using Appwrite, guide them to create an account and project at https://cloud.appwrite.io/console
- Under **Integrate with your server**, add an **API Key** with the following scopes:

| Category | Required scopes   | Purpose                                                |
| -------- | ----------------- | ------------------------------------------------------ |
| Database | \`databases.write\` | Allows API key to create, update, and delete databases |
|          | \`tables.write\`    | Allows API key to create, update, and delete tables    |
|          | \`columns.write\`   | Allows API key to create, update, and delete columns   |
|          | \`rows.read\`       | Allows API key to read rows                            |
|          | \`rows.write\`      | Allows API key to create, update, and delete rows      |

- Other scopes are optional.

## Step 2: Create Rust project

- If you already have a Rust project open, stay in it and use it.
- Otherwise, run:

\`\`\`sh
cargo new my_app
cd my_app
\`\`\`

## Step 3: Install Appwrite SDK

- Run:

\`\`\`sh
cargo add appwrite
cargo add tokio -F full
cargo add serde_json
\`\`\`

## Step 4: Import Appwrite and initialize client (ask user for details; never assume)

- Ask the user for:
    - Appwrite Cloud Region (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
    - **API Key** (from Console -> View API Keys)
- Open \`src/main.rs\` and initialize the Appwrite Client:

\`\`\`rust
use appwrite::Client;
use appwrite::services::tables_db::TablesDB;
use appwrite::id::ID;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new()
        .set_endpoint("https://<REGION>.cloud.appwrite.io/v1")
        .set_project("<PROJECT_ID>")
        .set_key("<YOUR_API_KEY>");

    Ok(())
}
\`\`\`

## Step 5: Initialize database

- Create a function to configure a todo table:

\`\`\`rust
async fn prepare_database(
    tables_db: &TablesDB,
) -> Result<(String, String), Box<dyn std::error::Error>> {
    let todo_database = tables_db.create(
        ID::unique(),
        "TodosDB",
        None,
    ).await?;

    let todo_table = tables_db.create_table(
        &todo_database.id,
        ID::unique(),
        "Todos",
        None, None, None, None, None,
    ).await?;

    tables_db.create_varchar_column(
        &todo_database.id,
        &todo_table.id,
        "title",
        255,
        true,
        None, None, None,
    ).await?;

    tables_db.create_text_column(
        &todo_database.id,
        &todo_table.id,
        "description",
        false,
        Some("This is a test description."),
        None, None,
    ).await?;

    tables_db.create_boolean_column(
        &todo_database.id,
        &todo_table.id,
        "isComplete",
        true,
        None, None,
    ).await?;

    Ok((todo_database.id, todo_table.id))
}
\`\`\`

## Step 6: Add rows (seed database)

- Create a function to add mock data into the table:

\`\`\`rust
async fn seed_database(
    tables_db: &TablesDB,
    database_id: &str,
    table_id: &str,
) -> Result<(), Box<dyn std::error::Error>> {
    tables_db.create_row(
        database_id,
        table_id,
        ID::unique(),
        json!({
            "title": "Buy apples",
            "description": "At least 2KGs",
            "isComplete": true
        }),
        None, None,
    ).await?;

    tables_db.create_row(
        database_id,
        table_id,
        ID::unique(),
        json!({
            "title": "Wash the apples",
            "isComplete": true
        }),
        None, None,
    ).await?;

    tables_db.create_row(
        database_id,
        table_id,
        ID::unique(),
        json!({
            "title": "Cut the apples",
            "description": "Don't forget to pack them in a box",
            "isComplete": false
        }),
        None, None,
    ).await?;

    Ok(())
}
\`\`\`

## Step 7: Retrieve rows

- Add the query import and create functions to retrieve todos:

\`\`\`rust
use appwrite::query::Query;

async fn get_todos(
    tables_db: &TablesDB,
    database_id: &str,
    table_id: &str,
) -> Result<(), Box<dyn std::error::Error>> {
    let todos = tables_db.list_rows(
        database_id,
        table_id,
        None, None, None, None,
    ).await?;

    println!("Todos:");
    for todo in &todos.rows {
        println!("Title: {}\\nDescription: {}\\nIs Todo Complete: {}\\n",
            todo.get::<String>("title").unwrap_or_default(),
            todo.get::<String>("description").unwrap_or_default(),
            todo.get::<bool>("isComplete").unwrap_or_default(),
        );
    }

    let completed_todos = tables_db.list_rows(
        database_id,
        table_id,
        Some(vec![
            Query::equal("isComplete", true).to_string(),
            Query::order_desc("$createdAt").to_string(),
            Query::limit(5).to_string(),
        ]),
        None, None, None,
    ).await?;

    println!("Completed todos (limited to 5):");
    for todo in &completed_todos.rows {
        println!("Title: {}\\nDescription: {}\\nIs Todo Complete: {}\\n",
            todo.get::<String>("title").unwrap_or_default(),
            todo.get::<String>("description").unwrap_or_default(),
            todo.get::<bool>("isComplete").unwrap_or_default(),
        );
    }

    let incomplete_todos = tables_db.list_rows(
        database_id,
        table_id,
        Some(vec![
            Query::equal("isComplete", false).to_string(),
            Query::order_asc("title").to_string(),
        ]),
        None, None, None,
    ).await?;

    println!("Incomplete todos (ordered by title):");
    for todo in &incomplete_todos.rows {
        println!("Title: {}\\nDescription: {}\\nIs Todo Complete: {}\\n",
            todo.get::<String>("title").unwrap_or_default(),
            todo.get::<String>("description").unwrap_or_default(),
            todo.get::<bool>("isComplete").unwrap_or_default(),
        );
    }

    Ok(())
}
\`\`\`

## Step 8: Update main function and run

- Update \`main()\` to call all functions:

\`\`\`rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new()
        .set_endpoint("https://<REGION>.cloud.appwrite.io/v1")
        .set_project("<PROJECT_ID>")
        .set_key("<YOUR_API_KEY>");

    let tables_db = TablesDB::new(&client);

    let (database_id, table_id) = prepare_database(&tables_db).await?;
    seed_database(&tables_db, &database_id, &table_id).await?;
    get_todos(&tables_db, &database_id, &table_id).await?;

    Ok(())
}
\`\`\`

- Run: \`cargo run\`
- View the response in the console

## Deliverables

- A running Rust app with working Appwrite server integration
- Files created: \`Cargo.toml\`, \`src/main.rs\`
- A **TodosDB** database with a **Todos** table containing \`title\`, \`description\`, and \`isComplete\` columns
- Three seeded todo rows with the ability to query and filter them
`,V=`## Add Appwrite Auth to a New Solid (Vite) App

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all times. Don't use NPM if the user uses something else.

## Step 1: Create Project in Appwrite Console

- Guide the user to head to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is their first time using Appwrite, create an account and create their first project.
- Under **Add a platform**, add a **Web app** with **Hostname** = \`localhost\`.

## Step 2: Create Solid Project

- First, check if the current directory contains files that appear unrelated to a development workspace (e.g., personal files, downloads, random documents, media files). If such files are detected, ask the user: 'The current directory contains files that don't appear to be part of a development project. Would you like to: (1) proceed here anyway, or (2) create a subdirectory with a specific folder name?' and proceed based on their choice.
- If the directory is empty OR contains an existing project (e.g., \`package.json\`, \`src\` folder, config files), proceed directly with integration - do NOT ask the user about existing projects.
- Create the project in the current working directory (\`.\`) - do NOT use \`cd\` to switch directories.
- Run: \`npm create vite@latest . -- --template solid\`

## Step 3: Install Appwrite SDK

- Run: \`npm install appwrite\`

## Step 4: Create Appwrite Client Module

Ask the user for (never assume):

- **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
- **Project ID** (from Console -> Settings)

Hardcode the endpoint and project ID in the file \`src/lib/appwrite.js\` if provided, else leave a placeholder and ask the user to provide them.

Create file \`src/lib/appwrite.js\` with key snippet:

\`\`\`js
import { Client, Account } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://<REGION>.cloud.appwrite.io/v1').setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
\`\`\`

## Step 5: Build the Login Page

- If this is a fresh project, replace \`src/App.jsx\` with the auth component.
- If you are working in an existing project, add a new route/page instead of overriding the default route.
- The component should use Solid's \`createSignal\` for state management and render:
    - Email/password inputs
    - Name input for registration
    - Buttons: **Login**, **Register**, **Logout**
    - Shows "Logged in as \\<name\\>" when a session exists
- Implement functions:
    - \`login(email, password)\`: \`account.createEmailPasswordSession({ email, password })\` then set user via \`account.get()\`
    - \`register(email, password, name)\`: \`account.create({ userId: ID.unique(), email, password, name })\` then call \`login\`
    - \`logout()\`: \`account.deleteSession({ sessionId: 'current' })\` then clear user state

Key snippet for \`src/App.jsx\`:

\`\`\`jsx
import { createSignal } from 'solid-js';
import { account, ID } from './lib/appwrite';

const App = () => {
    const [loggedInUser, setLoggedInUser] = createSignal(null);
    const [email, setEmail] = createSignal('');
    const [password, setPassword] = createSignal('');
    const [name, setName] = createSignal('');

    async function login(email, password) {
        await account.createEmailPasswordSession({
            email,
            password
        });
        setLoggedInUser(await account.get());
    }

    async function register(email, password, name) {
        await account.create({
            userId: ID.unique(),
            email,
            password,
            name
        });
        await login(email, password);
    }

    async function logout() {
        await account.deleteSession({ sessionId: 'current' });
        setLoggedInUser(null);
    }

    if (loggedInUser()) {
        return (
            <div>
                <p>Logged in as {loggedInUser().name}</p>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <p>Not logged in</p>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={email()}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password()}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={name()}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="button" onClick={() => login(email(), password())}>
                    Login
                </button>
                <button type="button" onClick={() => register(email(), password(), name())}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default App;
\`\`\`

## Step 6: Run and Test

- Run: \`npm run dev -- --open --port 3000\`
- Open: \`http://localhost:3000\`
- Test flows:
    - Register a new user and auto login works
    - Logout then login again
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to \`src/lib/appwrite.js\` and Console settings.

## Deliverables

- A running Solid app with working Appwrite auth (register/login/logout)
- Files created/updated: \`package.json\` (deps), \`src/lib/appwrite.js\`, \`src/App.jsx\`
`,H=`## Add Appwrite Auth to a New SvelteKit App

Goal: Add Appwrite auth to a new SvelteKit app with a working login/register/logout page.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all times. Don't use NPM if the user uses something else.

## Step 1: Create or Use Existing SvelteKit App

- First, check the contents of the current working directory.
- If the directory contains files that appear unrelated to a development workspace (e.g., personal documents, downloads, photos, random files that don't belong in a code project), ask the user: "The current directory contains files that don't appear to be part of a development project. Would you like to: (1) proceed here anyway, or (2) create it in a subdirectory with a specific folder name?" and proceed based on their choice.
- If the directory is empty OR contains an existing project (\`package.json\`, \`src\` folder, config files, etc.), proceed directly with integration; do NOT ask the user, just integrate into the existing project.
- Run: \`npx sv create .\` (this creates the project in the current directory)
- Do NOT use \`cd\` to switch directories; always work in the current directory (\`.\`).
- Follow the prompts to create your project.

## Step 2: Install Appwrite SDK

- Run: \`npm install appwrite\`

## Step 3: Create Appwrite Client Module (Ask User for Details; Never Assume)

- Ask the user for:
    - **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
- Hardcode the endpoint and project ID in the file \`src/lib/appwrite.js\` (or \`.ts\`) if provided, else leave placeholder and ask the user to provide them.
- Create file \`src/lib/appwrite.js\` (or \`.ts\`) with key snippet:

\`\`\`js
import { Client, Account } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://<REGION>.cloud.appwrite.io/v1').setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
\`\`\`

## Step 4: Build the Login Page

- If this is a fresh project, replace the contents of \`src/routes/+page.svelte\` with the login page component.
- If you are working in an existing project, add a new route/page instead of overriding the default route (e.g., \`src/routes/auth/+page.svelte\`).
- The component should render:
    - Email/password inputs
    - Buttons: **Login**, **Register**, **Logout**
    - Shows "Logged in as \\<name>" when a session exists, otherwise "Not logged in"
- Implement functions:
    - \`login(email, password)\`: \`account.createEmailPasswordSession({ email, password })\` then set \`loggedInUser\` via \`account.get()\`
    - \`register(email, password)\`: \`account.create({ userId: ID.unique(), email, password })\` then call \`login\`
    - \`logout()\`: \`account.deleteSession({ sessionId: 'current' })\` then set \`loggedInUser\` to \`null\`
- Key snippet for \`src/routes/+page.svelte\`:

\`\`\`html
<script>
    import { account, ID } from '$lib/appwrite';

    let loggedInUser = null;

    async function login(email, password) {
        await account.createEmailPasswordSession({
            email,
            password
        });
        loggedInUser = await account.get();
    }

    async function register(email, password) {
        await account.create({
            userId: ID.unique(),
            email,
            password
        });
        login(email, password);
    }

    function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const type = e.submitter.dataset.type;

        if (type === 'login') {
            login(formData.get('email'), formData.get('password'));
        } else if (type === 'register') {
            register(formData.get('email'), formData.get('password'));
        }
    }

    async function logout() {
        await account.deleteSession({ sessionId: 'current' });
        loggedInUser = null;
    }
<\/script>

<p>{loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in'}</p>

<form on:submit="{submit}">
    <input type="email" placeholder="Email" name="email" required />
    <input type="password" placeholder="Password" name="password" required />

    <button type="submit" data-type="login">Login</button>
    <button type="submit" data-type="register">Register</button>
</form>

<button on:click="{logout}">Logout</button>
\`\`\`

## Step 5: Verify Environment (Ask User to Confirm)

- Confirm **endpoint** and **Project ID** are set in \`src/lib/appwrite.js\`.
- Ensure the Web app platform exists in **Appwrite Console** with **Hostname** = \`localhost\`. If missing, guide the user to add it.

## Step 6: Run and Test

- Run: \`npm run dev\`
- Open: \`http://localhost:5173\`
- Test flows:
    - Register a new user and auto login works
    - Logout then login again
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to \`appwrite.js\` and Console settings.

## Deliverables

- A running SvelteKit app with working Appwrite auth (register/login/logout)
- Files created/updated: \`package.json\` (deps), \`src/lib/appwrite.js\`, \`src/routes/+page.svelte\`
`,U=`## Create a Swift Server-Side CLI Application with Appwrite

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

_Note: This is for the **Swift Server SDK**, meant for server and backend applications. This is NOT for client-side iOS, macOS, watchOS, or tvOS apps._

## Step 1: Create project in Appwrite Console

- Head to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is the user's first time using Appwrite, guide them to create an account and create their first project.
- Under **Integrate with your server**, add an **API Key** with the following scopes:

| Category | Required scopes   | Purpose                                                 |
| -------- | ----------------- | ------------------------------------------------------- |
| Database | \`databases.write\` | Allows API key to create, update, and delete databases. |
|          | \`tables.write\`    | Allows API key to create, update, and delete tables.    |
|          | \`columns.write\`   | Allows API key to create, update, and delete columns.   |
|          | \`rows.read\`       | Allows API key to read rows.                            |
|          | \`rows.write\`      | Allows API key to create, update, and delete rows.      |

- Other scopes are optional.

## Step 2: Create Swift project

- Create a Swift CLI application by opening **XCode** > **Create a new XCode project** > **macOS** > **Command Line Tool**.
- Follow the wizard and open the new project.

## Step 3: Install Appwrite SDK

- Install the Swift Appwrite SDK by going to **File** > **Add Packages...** and search for the repo url \`https://github.com/appwrite/sdk-for-swift\` and select \`sdk-for-swift\`.
- Specify version as \`10.0.0\` with rule **Up to Next Major Version**.

## Step 4: Import Appwrite and initialize client

Ask the user for the following values; never assume them:

- **Appwrite Cloud Region** (e.g., \`fra\`, \`nyc\`)
- **Project ID** (from **Console** > **Settings**)
- **API Key** (from **Console** > **View API Keys**)

Open the file \`main.swift\` and initialize the Appwrite Client. Replace placeholders with user-provided values:

\`\`\`swift
import Foundation
import Appwrite
import AppwriteModels

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<YOUR_API_KEY>")
\`\`\`

## Step 5: Initialize database

Create a function to configure a todo database and table:

\`\`\`swift
let tablesDB = TablesDB(client)

func prepareDatabase() async -> (Database?, Table?) {
    let todoDatabase = try? await tablesDB.create(
        databaseId: ID.unique(),
        name: "TodosDB"
    )
    let todoTable = try? await tablesDB.createTable(
        databaseId: todoDatabase!.id,
        tableId: ID.unique(),
        name: "Todos"
    )
    try? await tablesDB.createVarcharColumn(
        databaseId: todoDatabase!.id,
        tableId: todoTable!.id,
        key: "title",
        size: 255,
        required: true
    )
    try? await tablesDB.createTextColumn(
        databaseId: todoDatabase!.id as! String,
        tableId: todoTable!.id as! String,
        key: "description",
        required: false,
        default: "This is a test description."
    )
    try? await tablesDB.createBooleanColumn(
        databaseId: todoDatabase!.id as! String,
        tableId: todoTable!.id as! String,
        key: "isComplete",
        required: true
    )

    return (todoDatabase, todoTable)
}
\`\`\`

## Step 6: Add rows

Create a function to add mock data into the table:

\`\`\`swift
func seedDatabase(todoDatabase: Database?, todoTable: Table?) async {
    let testTodo1: [String: Any] = [
        "title": "Buy apples",
        "description": "At least 2KGs",
        "isComplete": true
    ]

    let testTodo2: [String: Any] = [
        "title": "Wash the apples",
        "isComplete": true
    ]

    let testTodo3: [String: Any] = [
        "title": "Cut the apples",
        "description": "Don't forget to pack them in a box",
        "isComplete": false
    ]

    try? await tablesDB.createRow(
        databaseId: todoDatabase!.id,
        tableId: todoTable!.id,
        rowId: ID.unique(),
        data: testTodo1
    )
    try? await tablesDB.createRow(
        databaseId: todoDatabase!.id,
        tableId: todoTable!.id,
        rowId: ID.unique(),
        data: testTodo2
    )
    try? await tablesDB.createRow(
        databaseId: todoDatabase!.id,
        tableId: todoTable!.id,
        rowId: ID.unique(),
        data: testTodo3
    )
}
\`\`\`

## Step 7: Retrieve rows

Create a function to retrieve and display the todo data:

\`\`\`swift
func getTodos(todoDatabase: Database?, todoTable: Table?) async {
    let todos = try? await tablesDB.listRows(
        databaseId: todoDatabase!.id as! String,
        tableId: todoTable!.id as! String
    )
    for row in todos?.rows ?? [] {
        if let todo = row.data as? [String: Any] {
            print("Title: \\(todo["title"] ?? "")\\n"
                + "Description: \\(todo["description"] ?? "")\\n"
                + "Is Todo Complete: \\(todo["isComplete"] ?? "")\\n\\n"
            )
        }
    }
}

let (todoDatabase, todoTable) = await prepareDatabase()
await seedDatabase(todoDatabase: todoDatabase, todoTable: todoTable)
await getTodos(todoDatabase: todoDatabase, todoTable: todoTable)
\`\`\`

## Step 8: Run and test

- Run the project with **XCode** and see the results in the console.
- Verify that the todo items are printed correctly with their title, description, and completion status.
- Surface any Appwrite errors (invalid project, endpoint, API key) and fix by guiding updates to the client configuration.

## Deliverables

- A running Swift CLI application connected to Appwrite
- A **TodosDB** database with a **Todos** table containing three columns (\`title\`, \`description\`, \`isComplete\`)
- Three seeded todo rows in the database
- Console output displaying the retrieved todo items
- Files created/updated: \`main.swift\` (with all Appwrite client initialization, database setup, seeding, and retrieval logic)
`,W=`## Add Appwrite Auth to a TanStack Start app

Add Appwrite auth to a new TanStack Start app using the official Appwrite React library, with a working sign-up, sign-in, and sign-out flow backed by SSR session cookies.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect the user's package manager at all times. Don't use NPM if the user uses something else.

## Step 1: Create or use existing TanStack Start app

- First, check what files exist in the current working directory.
- If the directory contains files that appear unrelated to a development workspace (e.g., personal documents, downloads, photos, random files that don't belong in a code project), ask the user: "The current directory contains files that don't appear to be part of a development project. Would you like to proceed here anyway, or create a subdirectory with a specific folder name?"
- If the directory is empty OR contains an existing project (\`package.json\`, config files, \`src\` folder, etc.), proceed with integration without asking - just work with what's there.
- To scaffold a new TanStack Start project, run: \`npx @tanstack/cli create . --framework react\` (use \`.\` to create in the current directory - do NOT use \`cd\` to switch directories)

## Step 2: Install the Appwrite React library

- Run: \`npm install @appwrite.io/react appwrite node-appwrite @tanstack/react-query\`

## Step 3: Configure environment variables

_Ask the user for details; never assume._

- Ask the user for:
    - **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console → Settings)
    - **API key** with scopes \`users.read\`, \`users.write\`, \`sessions.write\` (Console → Overview → Integrations → API keys)
- Create a \`.env\` file at the project root:

\`\`\`sh
VITE_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=<PROJECT_ID>
APPWRITE_API_KEY=<API_KEY>
\`\`\`

- The \`APPWRITE_API_KEY\` is server-only. Never expose it to the browser.

## Step 4: Mount the auth handler route

- Create \`src/routes/api/appwrite/$.ts\`:

\`\`\`ts
import { createFileRoute } from '@tanstack/react-router';
import { createAppwriteHandlers } from '@appwrite.io/react/handlers/tanstack';

export const Route = createFileRoute('/api/appwrite/$')({
    server: {
        handlers: createAppwriteHandlers({
            endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
            projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
            apiKey: process.env.APPWRITE_API_KEY!,
            basePath: '/api/appwrite'
        })
    }
});
\`\`\`

## Step 5: Build the auth route

- If this is a fresh project, you may replace \`src/routes/index.tsx\` with the auth UI route. If you are working in an existing project, create a new route (e.g., \`src/routes/auth.tsx\`) instead of overriding the default route.
- The route reads SSR auth state via a server function and passes the session into \`AppwriteProvider\`:

\`\`\`tsx
import { useState } from 'react';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { AppwriteProvider, useAuth } from '@appwrite.io/react';
import { createTanStackServerHelpers } from '@appwrite.io/react/server/tanstack';

const getAuthSnapshot = createServerFn({ method: 'GET' }).handler(async () => {
    const helpers = createTanStackServerHelpers({
        endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
        projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID
    });
    return {
        session: helpers.readSessionCookie() ?? null,
        user: await helpers.getLoggedInUser()
    };
});

export const Route = createFileRoute('/')({
    loader: () => getAuthSnapshot(),
    component: Page
});

function Page() {
    const { session, user } = Route.useLoaderData();

    return (
        <AppwriteProvider
            endpoint={import.meta.env.VITE_APPWRITE_ENDPOINT}
            projectId={import.meta.env.VITE_APPWRITE_PROJECT_ID}
            ssr={{ session, basePath: '/api/appwrite' }}
        >
            <main>
                <p>SSR user: {user?.email ?? 'signed out'}</p>
                <AuthPanel />
            </main>
        </AppwriteProvider>
    );
}

function AuthPanel() {
    const { user, isLoading, signIn, signUp, signOut, error } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    if (isLoading) return <p>Loading...</p>;

    if (user) {
        return (
            <button onClick={() => signOut.signOut({ onSuccess: () => router.invalidate() })}>
                Sign out
            </button>
        );
    }

    return (
        <div>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={() =>
                    signUp.emailPassword({
                        email,
                        password,
                        name,
                        onSuccess: () => router.invalidate()
                    })
                }
            >
                Sign up
            </button>
            <button
                onClick={() =>
                    signIn.emailPassword({ email, password, onSuccess: () => router.invalidate() })
                }
            >
                Sign in
            </button>
            {error && <p>{error.message}</p>}
        </div>
    );
}
\`\`\`

## Step 6: Verify environment (ask user to confirm)

- Confirm \`.env\` has the endpoint, project ID, and API key set.
- Ensure the Web app platform exists in Appwrite Console with **Hostname** = \`localhost\`. If missing, guide the user to add it.

## Step 7: Run and test

- Run: \`npm run dev\`
- Open: \`http://localhost:3000\`
- Test flows:
    - Sign up a new user, confirm the SSR-rendered user reflects the change after \`router.invalidate()\`
    - Sign out, then sign in again
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname, missing key scopes) and fix by guiding updates to \`.env\` and Console settings.

## Deliverables

- A TanStack Start app with working Appwrite auth using \`@appwrite.io/react\`
- Files created/updated: \`package.json\` (deps), \`.env\`, \`src/routes/api/appwrite/$.ts\`, auth route file
`,G=`## Add Appwrite auth to a new Vue.js app with a working login/register/logout page

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all times. Don't use NPM if the user uses something else.

## Step 1: Create project in Appwrite Console

- Guide user to the [Appwrite Console](https://cloud.appwrite.io/console).
- If this is their first time using Appwrite, help them create an account and create their first project.
- Under **Add a platform**, add a **Web app** with **Hostname** = \`localhost\`.

## Step 2: Create or integrate into Vue project

- First, check the current working directory contents.
- If the directory contains files that appear unrelated to a development workspace (e.g., personal files, downloads, random documents, media files), ask the user: "The current directory contains files that don't appear to be part of a development project. Would you like to: (1) proceed here anyway, or (2) create a subdirectory with a specific folder name?" and proceed based on their choice.
- If the directory is empty OR contains an existing project (e.g., \`package.json\`, \`src\` folder, config files), proceed directly without asking; integrate Appwrite into the existing project.
- For new projects, run: \`npm init vue@latest .\` (use \`.\` to create in current directory)
- Do NOT use \`cd\` to switch directories; always work in the current directory.

## Step 3: Install Appwrite SDK

- Run: \`npm install appwrite\`

## Step 4: Create Appwrite client module (ask user for details; never assume)

- Ask the user for:
    - **Appwrite Cloud Region** (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (found in Console -> Settings page)
- Hardcode the endpoint and project ID in the file \`src/lib/appwrite.js\` if provided, else leave a placeholder and ask the user to provide them.
- Create file \`src/lib/appwrite.js\` with key snippet:

\`\`\`js
import { Client, Account } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://<REGION>.cloud.appwrite.io/v1').setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
\`\`\`

## Step 5: Build the login page

- If this is a fresh project, replace \`src/App.vue\` with a component that renders the auth UI.
- If you are working in an existing project, add a new route/page instead of overriding the default route.
- The component should render:
    - Email/password inputs
    - Name input for registration
    - Buttons: **Login**, **Register**, **Logout**
    - Shows "Logged in as \\<name\\>" when a session exists, otherwise "Not logged in"
- Implement functions using Vue's **Composition API** with \`<script setup>\`:
    - \`login(email, password)\`: \`account.createEmailPasswordSession({ email, password })\` then set user via \`account.get()\`
    - \`register()\`: \`account.create({ userId: ID.unique(), email: email.value, password: password.value, name: name.value })\` then call \`login\`
    - \`logout()\`: \`account.deleteSession({ sessionId: 'current' })\` then clear user state
- Key snippet for \`src/App.vue\`:

\`\`\`html
<template>
    <div>
        <p>{{ loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in' }}</p>

        <form>
            <input type="email" placeholder="Email" v-model="email" />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="text" placeholder="Name" v-model="name" />
            <button type="button" @click="login(email, password)">Login</button>
            <button type="button" @click="register">Register</button>
            <button type="button" @click="logout">Logout</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { account, ID } from './lib/appwrite.js';

    const loggedInUser = ref(null);
    const email = ref('');
    const password = ref('');
    const name = ref('');

    const login = async (email, password) => {
        await account.createEmailPasswordSession({
            email,
            password
        });
        loggedInUser.value = await account.get();
    };

    const register = async () => {
        await account.create({
            userId: ID.unique(),
            email: email.value,
            password: password.value,
            name: name.value
        });
        login(email.value, password.value);
    };

    const logout = async () => {
        await account.deleteSession({
            sessionId: 'current'
        });
        loggedInUser.value = null;
    };
<\/script>
\`\`\`

## Step 6: Run and test

- Run: \`npm run dev -- --open --port 3000\`
- Open: \`http://localhost:3000\`
- Test flows:
    - Register a new user and auto login works
    - Logout then login again
- Surface any Appwrite errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to \`src/lib/appwrite.js\` and Console settings.

## Deliverables

- A running Vue.js app with working Appwrite auth (register/login/logout)
- Files created/updated: \`package.json\` (deps), \`src/lib/appwrite.js\`, \`src/App.vue\`
`,K=`## Set up the Appwrite Web SDK in a vanilla JavaScript or TypeScript web app and initialize the client

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

- Respect user's package manager at all times. Don't use NPM if the user uses something else.
- All files must be created in the current working directory (\`.\`). Never create a subdirectory for the project.

## Step 1: Create project in Appwrite Console

- Guide the user to the Appwrite Console: https://cloud.appwrite.io/console
- If this is their first time using Appwrite, have them create an account and create their first project.
- Under **Add a platform**, add a **Web** app.
- The **Hostname** should be \`localhost\` or the domain on which they're hosting their web app.
- Optional steps can be skipped.

## Step 2: Install Appwrite SDK

- **Option A** (npm): Run \`npm install appwrite\`
- **Option B** (CDN): Add a script tag to the HTML file:

\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/appwrite@17.0.0"><\/script>
\`\`\`

## Step 3: Initialize Appwrite client (ask user for details; never assume)

- Before creating files, check the current working directory contents. If the directory contains files that appear unrelated to a development workspace (e.g., personal documents, downloads, random files, photos, or other non-code files), ask the user: 'The current directory contains files that don't appear to be part of a development project. Would you like to proceed here anyway, or create a subdirectory for the project?' If the directory is empty OR contains an existing project (e.g., \`package.json\`, \`src/\`, \`node_modules\`, config files, or other typical project structure), proceed with integration without asking.
- Ask the user for:
    - Appwrite Cloud Region (e.g. \`fra\`, \`nyc\`)
    - **Project ID** (from Console -> Settings)
- Create files in the current working directory (\`.\`) - do NOT use \`cd\` to switch directories.
- If using npm, create an \`appwrite.js\` (or \`appwrite.ts\`) file with:

\`\`\`js
import { Client, Account } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://<REGION>.cloud.appwrite.io/v1').setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
\`\`\`

- If using CDN, use the global Appwrite object:

\`\`\`js
const client = new Appwrite.Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('<PROJECT_ID>'); // Replace with your project ID

const account = new Appwrite.Account(client);
const tablesDB = new Appwrite.TablesDB(client);
\`\`\`

## Step 4: TypeScript setup (optional, if user prefers TypeScript)

- Import TypeScript models from the Appwrite SDK:

\`\`\`ts
// appwrite.ts

import { Client, TablesDB, Account } from 'appwrite';
// Import type models for Appwrite
import { type Models } from 'appwrite';

const client: Client = new Client();

client.setEndpoint('https://<REGION>.cloud.appwrite.io/v1').setProject('<PROJECT_ID>'); // Replace with your project ID

export const account: Account = new Account(client);
export const tablesDB: TablesDB = new TablesDB(client);

// You then use the imported type definitions like this
const authUser: Models.Session = await account.createEmailPasswordSession({
    email,
    password
});
\`\`\`

## Step 5: Extending TypeScript models (optional)

- When fetching rows from a table, define the expected structure:

\`\`\`ts
interface Idea extends Models.Row {
    title: string;
    description: string;
    userId: string;
}
\`\`\`

- Use this interface when fetching rows:

\`\`\`ts
const response = await tablesDB.listRows({
    databaseId: ideasDatabaseId,
    tableId: ideasTableId,
    queries: [Query.orderDesc('$createdAt'), Query.limit(queryLimit)]
});
const ideas = response.rows as Idea[];
\`\`\`

## Step 6: Type-safe database operations (optional)

- For better type safety, define interfaces and use generics:

\`\`\`ts
interface User {
    name: string;
    email: string;
    isVerified: boolean;
}

import { Client, TablesDB } from 'appwrite';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new TablesDB(client);

// Type-safe database operations
try {
    const users = await databases.listRows<User>({
        databaseId: '[DATABASE_ID]',
        tableId: '[TABLE_ID]'
    });

    users.rows.forEach((user) => {
        console.log(\`User: \${user.name} (\${user.email})\`);
    });
} catch (error) {
    console.log(error);
}
\`\`\`

- _Tip: Use the Appwrite CLI to generate TypeScript interfaces automatically:_ \`appwrite types ./types\`

## Step 7: Next steps

- The Appwrite SDK works with popular Web frameworks. Guide the user to framework-specific quickstarts:
    - **Next.js**: \`/docs/quick-starts/nextjs\`
    - **React**: \`/docs/quick-starts/react\`
    - **Vue.js**: \`/docs/quick-starts/vue\`
    - **Nuxt**: \`/docs/quick-starts/nuxt\`
    - **SvelteKit**: \`/docs/quick-starts/sveltekit\`
    - **Angular**: \`/docs/quick-starts/angular\`
- Or guide them to tutorials for building an idea tracker app:
    - **React**: \`/docs/tutorials/react\`
    - **Vue.js**: \`/docs/tutorials/vue\`
    - **Nuxt**: \`/docs/tutorials/nuxt\`
    - **SvelteKit**: \`/docs/tutorials/sveltekit\`

## Deliverables

- Appwrite Web SDK installed (via npm or CDN)
- Appwrite client initialized with endpoint and **Project ID**
- Files created/updated: \`appwrite.js\` (or \`appwrite.ts\`), \`package.json\` (if using npm)
`,q={"/src/content/docs/quick-starts/android/prompt.md":S,"/src/content/docs/quick-starts/android-java/prompt.md":C,"/src/content/docs/quick-starts/angular/prompt.md":w,"/src/content/docs/quick-starts/apple/prompt.md":T,"/src/content/docs/quick-starts/dart/prompt.md":E,"/src/content/docs/quick-starts/deno/prompt.md":D,"/src/content/docs/quick-starts/dotnet/prompt.md":O,"/src/content/docs/quick-starts/flutter/prompt.md":k,"/src/content/docs/quick-starts/go/prompt.md":A,"/src/content/docs/quick-starts/kotlin/prompt.md":j,"/src/content/docs/quick-starts/nextjs/prompt.md":M,"/src/content/docs/quick-starts/node/prompt.md":N,"/src/content/docs/quick-starts/nuxt/prompt.md":P,"/src/content/docs/quick-starts/php/prompt.md":F,"/src/content/docs/quick-starts/python/prompt.md":I,"/src/content/docs/quick-starts/react/prompt.md":L,"/src/content/docs/quick-starts/react-native/prompt.md":R,"/src/content/docs/quick-starts/refine/prompt.md":z,"/src/content/docs/quick-starts/ruby/prompt.md":ae,"/src/content/docs/quick-starts/rust/prompt.md":B,"/src/content/docs/quick-starts/solid/prompt.md":V,"/src/content/docs/quick-starts/sveltekit/prompt.md":H,"/src/content/docs/quick-starts/swift/prompt.md":U,"/src/content/docs/quick-starts/tanstack-start/prompt.md":W,"/src/content/docs/quick-starts/vue/prompt.md":G,"/src/content/docs/quick-starts/web/prompt.md":K};function J(e){return e.replace(/^\/src\/content\/docs\//,``).replace(/\/prompt\.md$/,``)}var oe=Object.entries(q).reduce((e,[t,n])=>(e[J(t)]=n,e),{});function se(e){let t=e.trim().replace(/\/+$/,``);return t.startsWith(`/docs/`)?t.slice(6):t.replace(/^\/+/,``)}function Y(e){if(!e)return null;let t=se(e);return t?oe[t]??null:null}function X(e,t){return Y(e)??Y(t)}function ce(e,t){return X(e,t)!==null}var Z=p(u(),1),Q=p(m(),1);function le({prompt:r,showPromptPreview:l=!0,className:u}){let[p,m]=(0,Z.useState)(!1),g=ie(),_=r.trim(),x=async()=>{if(_)try{await navigator.clipboard.writeText(_),m(!0),s.success(`Prompt copied to clipboard`),window.setTimeout(()=>m(!1),1500)}catch{s.error(`Failed to copy prompt`)}},S=e=>{let t=b(e,_);t&&(re(t),s.success(`Opening ${e.name}...`))};return(0,Q.jsxs)(`div`,{className:y(`not-prose -mt-4 mb-8 overflow-hidden rounded-xl border border-border bg-card/50`,u),"aria-label":`Quick start agent prompt`,children:[(0,Q.jsxs)(`div`,{className:`px-6 py-4`,children:[(0,Q.jsx)(`h3`,{className:`text-[15px] font-semibold text-foreground`,children:`Quick start agent prompt`}),(0,Q.jsx)(`p`,{className:`mt-2 text-[13px] text-muted-foreground`,children:`Use this pre-built prompt with Cursor, Claude, or another coding agent to set up Appwrite for this guide. Copy it, preview it below, or open it directly in a supported tool.`})]}),(0,Q.jsx)(`div`,{className:`border-t border-border`}),(0,Q.jsxs)(`div`,{className:`flex flex-nowrap items-center gap-2 px-6 py-4`,children:[(0,Q.jsxs)(v,{type:`button`,size:`sm`,className:`h-9 shrink-0 gap-1.5 text-[13px]`,disabled:!_,onClick:()=>void x(),"aria-label":`Copy prompt`,children:[(0,Q.jsxs)(`span`,{className:`relative size-3.5 shrink-0`,"aria-hidden":!0,children:[(0,Q.jsx)(ne,{className:y(`size-3.5 transition-opacity`,p?`opacity-0`:`opacity-100`)}),(0,Q.jsx)(f,{className:y(`absolute inset-0 size-3.5 text-green-600 transition-opacity`,p?`opacity-100`:`opacity-0`)})]}),`Copy prompt`]}),(0,Q.jsxs)(o,{children:[(0,Q.jsx)(i,{asChild:!0,children:(0,Q.jsxs)(v,{type:`button`,variant:`outline`,size:`sm`,className:`h-9 shrink-0 gap-1.5 text-[13px]`,disabled:!_,children:[(0,Q.jsx)(e,{className:`size-3.5`}),`Open in tool`,(0,Q.jsx)(h,{className:`size-3.5`})]})}),(0,Q.jsx)(n,{align:`start`,className:`z-[10050] min-w-[200px]`,children:g.map(e=>(0,Q.jsxs)(a,{onClick:()=>S(e),children:[(0,Q.jsx)(`img`,{src:e.iconPath,alt:``,className:`size-4`}),(0,Q.jsxs)(`span`,{className:`ms-2`,children:[`Prompt `,e.name]}),(0,Q.jsx)(ee,{className:`ms-auto size-2.5 shrink-0 text-muted-foreground/30`,strokeWidth:1.25})]},e.id))})]})]}),l?(0,Q.jsxs)(te,{defaultOpen:!1,children:[(0,Q.jsxs)(t,{className:`group flex w-full cursor-pointer items-center justify-between gap-3 border-t border-border px-6 py-3 text-start transition-colors hover:bg-muted/30 data-[state=open]:bg-muted/20`,children:[(0,Q.jsx)(`span`,{className:`text-[13px] font-medium text-foreground`,children:`View prompt`}),(0,Q.jsx)(h,{className:`size-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180`})]}),(0,Q.jsx)(c,{className:`overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,children:(0,Q.jsx)(`div`,{className:`border-t border-border px-6 py-4`,children:(0,Q.jsx)(d,{code:_,language:`markdown`,fixedHeight:`min(40dvh, 420px)`})})})]}):null]})}function $(e,t){return e.meta.slug===t.meta.slug&&e.content===t.content&&e.rawContent===t.rawContent&&e.meta.title===t.meta.title&&e.meta.description===t.meta.description}function ue({page:e}){let[t,n]=(0,Z.useState)(e),i=(0,Z.useRef)(t);i.current=t,(0,Z.useEffect)(()=>{$(i.current,e)||n(e)},[e]),(0,Z.useEffect)(()=>{},[e.meta.slug]);let a=X(t.meta.slug,t.promptPath),o=ce(t.meta.slug,t.promptPath),s=t.meta.slug.startsWith(`tooling/ai/quickstart-prompts/`)&&t.meta.slug!==`tooling/ai/quickstart-prompts`,c=(0,Q.jsx)(l,{slug:t.meta.slug,showCopyPage:!o});return(0,Q.jsx)(r,{promptText:a,children:(0,Q.jsxs)(x,{slug:t.meta.slug,title:t.meta.title,description:t.meta.description,readingTimeMinutes:t.meta.readingTimeMinutes,toc:t.toc,headerActions:c,children:[a?(0,Q.jsx)(le,{prompt:a,showPromptPreview:!s}):null,(0,Q.jsx)(_,{content:t.content})]})})}function de(){let{page:e}=g.useLoaderData();return(0,Q.jsx)(ue,{page:e})}export{de as component};