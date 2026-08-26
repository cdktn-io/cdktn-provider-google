# `apigeeDeveloperApp` Submodule <a name="`apigeeDeveloperApp` Submodule" id="@cdktn/provider-google.apigeeDeveloperApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeDeveloperApp <a name="ApigeeDeveloperApp" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app google_apigee_developer_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperApp;

ApigeeDeveloperApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .callbackUrl(java.lang.String)
    .developerEmail(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .apiProducts(java.util.List<java.lang.String>)
//  .appFamily(java.lang.String)
//  .attributes(IResolvable|java.util.List<ApigeeDeveloperAppAttributes>)
//  .consumerKey(java.lang.String)
//  .consumerSecret(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .keyExpiresIn(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .timeouts(ApigeeDeveloperAppTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.developerEmail">developerEmail</a></code> | <code>java.lang.String</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.appFamily">appFamily</a></code> | <code>java.lang.String</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.attributes">attributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Optionally specify a static consumer key for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | Optionally specify a static consumer secret for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.keyExpiresIn">keyExpiresIn</a></code> | <code>java.lang.String</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.callbackUrl"></a>

- *Type:* java.lang.String

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#callback_url ApigeeDeveloperApp#callback_url}

---

##### `developerEmail`<sup>Required</sup> <a name="developerEmail" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.developerEmail"></a>

- *Type:* java.lang.String

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#developer_email ApigeeDeveloperApp#developer_email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#org_id ApigeeDeveloperApp#org_id}

---

##### `apiProducts`<sup>Optional</sup> <a name="apiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.apiProducts"></a>

- *Type:* java.util.List<java.lang.String>

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#api_products ApigeeDeveloperApp#api_products}

---

##### `appFamily`<sup>Optional</sup> <a name="appFamily" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.appFamily"></a>

- *Type:* java.lang.String

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#app_family ApigeeDeveloperApp#app_family}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.attributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#attributes ApigeeDeveloperApp#attributes}

---

##### `consumerKey`<sup>Optional</sup> <a name="consumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.consumerKey"></a>

- *Type:* java.lang.String

Optionally specify a static consumer key for the developer app's credential.

If not set, the API auto-generates a key. The consumer key must be unique
across all developer apps in an organization. Changing this field forces the
resource to be recreated.

This is a write-only input used at create time: the provider creates the
credential with this key via the keys API and removes the auto-generated
one. The effective key is exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#consumer_key ApigeeDeveloperApp#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.consumerSecret"></a>

- *Type:* java.lang.String

Optionally specify a static consumer secret for the developer app's credential.

Required if 'consumer_key' is specified. If not set, the API
auto-generates a secret. Changing this field forces the resource to be
recreated.

This is a write-only input used at create time; the effective secret is
exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#consumer_secret ApigeeDeveloperApp#consumer_secret}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#deletion_policy ApigeeDeveloperApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyExpiresIn`<sup>Optional</sup> <a name="keyExpiresIn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.keyExpiresIn"></a>

- *Type:* java.lang.String

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#key_expires_in ApigeeDeveloperApp#key_expires_in}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#scopes ApigeeDeveloperApp#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#status ApigeeDeveloperApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#timeouts ApigeeDeveloperApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetApiProducts">resetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAppFamily">resetAppFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerKey">resetConsumerKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerSecret">resetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetKeyExpiresIn">resetKeyExpiresIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes"></a>

```java
public void putAttributes(IResolvable|java.util.List<ApigeeDeveloperAppAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts"></a>

```java
public void putTimeouts(ApigeeDeveloperAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

---

##### `resetApiProducts` <a name="resetApiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetApiProducts"></a>

```java
public void resetApiProducts()
```

##### `resetAppFamily` <a name="resetAppFamily" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAppFamily"></a>

```java
public void resetAppFamily()
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetConsumerKey` <a name="resetConsumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerKey"></a>

```java
public void resetConsumerKey()
```

##### `resetConsumerSecret` <a name="resetConsumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerSecret"></a>

```java
public void resetConsumerSecret()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetId"></a>

```java
public void resetId()
```

##### `resetKeyExpiresIn` <a name="resetKeyExpiresIn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetKeyExpiresIn"></a>

```java
public void resetKeyExpiresIn()
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeDeveloperApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isConstruct"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperApp;

ApigeeDeveloperApp.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperApp;

ApigeeDeveloperApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperApp;

ApigeeDeveloperApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperApp;

ApigeeDeveloperApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeDeveloperApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigeeDeveloperApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeDeveloperApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeDeveloperApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeDeveloperApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList">ApigeeDeveloperAppAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList">ApigeeDeveloperAppCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerId">developerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lastModifiedAt">lastModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference">ApigeeDeveloperAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProductsInput">apiProductsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamilyInput">appFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrlInput">callbackUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKeyInput">consumerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecretInput">consumerSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmailInput">developerEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresInInput">keyExpiresInInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamily">appFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmail">developerEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresIn">keyExpiresIn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributes"></a>

```java
public ApigeeDeveloperAppAttributesList getAttributes();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList">ApigeeDeveloperAppAttributesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.credentials"></a>

```java
public ApigeeDeveloperAppCredentialsList getCredentials();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList">ApigeeDeveloperAppCredentialsList</a>

---

##### `developerId`<sup>Required</sup> <a name="developerId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerId"></a>

```java
public java.lang.String getDeveloperId();
```

- *Type:* java.lang.String

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lastModifiedAt"></a>

```java
public java.lang.String getLastModifiedAt();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeouts"></a>

```java
public ApigeeDeveloperAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference">ApigeeDeveloperAppTimeoutsOutputReference</a>

---

##### `apiProductsInput`<sup>Optional</sup> <a name="apiProductsInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProductsInput"></a>

```java
public java.util.List<java.lang.String> getApiProductsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appFamilyInput`<sup>Optional</sup> <a name="appFamilyInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamilyInput"></a>

```java
public java.lang.String getAppFamilyInput();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributesInput"></a>

```java
public IResolvable|java.util.List<ApigeeDeveloperAppAttributes> getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>>

---

##### `callbackUrlInput`<sup>Optional</sup> <a name="callbackUrlInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrlInput"></a>

```java
public java.lang.String getCallbackUrlInput();
```

- *Type:* java.lang.String

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKeyInput"></a>

```java
public java.lang.String getConsumerKeyInput();
```

- *Type:* java.lang.String

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecretInput"></a>

```java
public java.lang.String getConsumerSecretInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `developerEmailInput`<sup>Optional</sup> <a name="developerEmailInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmailInput"></a>

```java
public java.lang.String getDeveloperEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyExpiresInInput`<sup>Optional</sup> <a name="keyExpiresInInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresInInput"></a>

```java
public java.lang.String getKeyExpiresInInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeoutsInput"></a>

```java
public IResolvable|ApigeeDeveloperAppTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

---

##### `apiProducts`<sup>Required</sup> <a name="apiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProducts"></a>

```java
public java.util.List<java.lang.String> getApiProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appFamily`<sup>Required</sup> <a name="appFamily" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamily"></a>

```java
public java.lang.String getAppFamily();
```

- *Type:* java.lang.String

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrl"></a>

```java
public java.lang.String getCallbackUrl();
```

- *Type:* java.lang.String

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `developerEmail`<sup>Required</sup> <a name="developerEmail" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmail"></a>

```java
public java.lang.String getDeveloperEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyExpiresIn`<sup>Required</sup> <a name="keyExpiresIn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresIn"></a>

```java
public java.lang.String getKeyExpiresIn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeDeveloperAppAttributes <a name="ApigeeDeveloperAppAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppAttributes;

ApigeeDeveloperAppAttributes.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Key of the attribute. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#value ApigeeDeveloperApp#value}

---

### ApigeeDeveloperAppConfig <a name="ApigeeDeveloperAppConfig" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppConfig;

ApigeeDeveloperAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .callbackUrl(java.lang.String)
    .developerEmail(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .apiProducts(java.util.List<java.lang.String>)
//  .appFamily(java.lang.String)
//  .attributes(IResolvable|java.util.List<ApigeeDeveloperAppAttributes>)
//  .consumerKey(java.lang.String)
//  .consumerSecret(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .keyExpiresIn(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .timeouts(ApigeeDeveloperAppTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.developerEmail">developerEmail</a></code> | <code>java.lang.String</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.appFamily">appFamily</a></code> | <code>java.lang.String</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.attributes">attributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Optionally specify a static consumer key for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | Optionally specify a static consumer secret for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.keyExpiresIn">keyExpiresIn</a></code> | <code>java.lang.String</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.callbackUrl"></a>

```java
public java.lang.String getCallbackUrl();
```

- *Type:* java.lang.String

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#callback_url ApigeeDeveloperApp#callback_url}

---

##### `developerEmail`<sup>Required</sup> <a name="developerEmail" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.developerEmail"></a>

```java
public java.lang.String getDeveloperEmail();
```

- *Type:* java.lang.String

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#developer_email ApigeeDeveloperApp#developer_email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#org_id ApigeeDeveloperApp#org_id}

---

##### `apiProducts`<sup>Optional</sup> <a name="apiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.apiProducts"></a>

```java
public java.util.List<java.lang.String> getApiProducts();
```

- *Type:* java.util.List<java.lang.String>

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#api_products ApigeeDeveloperApp#api_products}

---

##### `appFamily`<sup>Optional</sup> <a name="appFamily" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.appFamily"></a>

```java
public java.lang.String getAppFamily();
```

- *Type:* java.lang.String

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#app_family ApigeeDeveloperApp#app_family}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.attributes"></a>

```java
public IResolvable|java.util.List<ApigeeDeveloperAppAttributes> getAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#attributes ApigeeDeveloperApp#attributes}

---

##### `consumerKey`<sup>Optional</sup> <a name="consumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

Optionally specify a static consumer key for the developer app's credential.

If not set, the API auto-generates a key. The consumer key must be unique
across all developer apps in an organization. Changing this field forces the
resource to be recreated.

This is a write-only input used at create time: the provider creates the
credential with this key via the keys API and removes the auto-generated
one. The effective key is exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#consumer_key ApigeeDeveloperApp#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

Optionally specify a static consumer secret for the developer app's credential.

Required if 'consumer_key' is specified. If not set, the API
auto-generates a secret. Changing this field forces the resource to be
recreated.

This is a write-only input used at create time; the effective secret is
exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#consumer_secret ApigeeDeveloperApp#consumer_secret}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#deletion_policy ApigeeDeveloperApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyExpiresIn`<sup>Optional</sup> <a name="keyExpiresIn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.keyExpiresIn"></a>

```java
public java.lang.String getKeyExpiresIn();
```

- *Type:* java.lang.String

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#key_expires_in ApigeeDeveloperApp#key_expires_in}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#scopes ApigeeDeveloperApp#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#status ApigeeDeveloperApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.timeouts"></a>

```java
public ApigeeDeveloperAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#timeouts ApigeeDeveloperApp#timeouts}

---

### ApigeeDeveloperAppCredentials <a name="ApigeeDeveloperAppCredentials" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentials;

ApigeeDeveloperAppCredentials.builder()
    .build();
```


### ApigeeDeveloperAppCredentialsApiProducts <a name="ApigeeDeveloperAppCredentialsApiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentialsApiProducts;

ApigeeDeveloperAppCredentialsApiProducts.builder()
    .build();
```


### ApigeeDeveloperAppCredentialsAttributes <a name="ApigeeDeveloperAppCredentialsAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentialsAttributes;

ApigeeDeveloperAppCredentialsAttributes.builder()
    .build();
```


### ApigeeDeveloperAppTimeouts <a name="ApigeeDeveloperAppTimeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppTimeouts;

ApigeeDeveloperAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#create ApigeeDeveloperApp#create}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#delete ApigeeDeveloperApp#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#update ApigeeDeveloperApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#create ApigeeDeveloperApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#delete ApigeeDeveloperApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_developer_app#update ApigeeDeveloperApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeDeveloperAppAttributesList <a name="ApigeeDeveloperAppAttributesList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppAttributesList;

new ApigeeDeveloperAppAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get"></a>

```java
public ApigeeDeveloperAppAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigeeDeveloperAppAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>>

---


### ApigeeDeveloperAppAttributesOutputReference <a name="ApigeeDeveloperAppAttributesOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppAttributesOutputReference;

new ApigeeDeveloperAppAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigeeDeveloperAppAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>

---


### ApigeeDeveloperAppCredentialsApiProductsList <a name="ApigeeDeveloperAppCredentialsApiProductsList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentialsApiProductsList;

new ApigeeDeveloperAppCredentialsApiProductsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get"></a>

```java
public ApigeeDeveloperAppCredentialsApiProductsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApigeeDeveloperAppCredentialsApiProductsOutputReference <a name="ApigeeDeveloperAppCredentialsApiProductsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentialsApiProductsOutputReference;

new ApigeeDeveloperAppCredentialsApiProductsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct">apiproduct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts">ApigeeDeveloperAppCredentialsApiProducts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiproduct`<sup>Required</sup> <a name="apiproduct" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct"></a>

```java
public java.lang.String getApiproduct();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue"></a>

```java
public ApigeeDeveloperAppCredentialsApiProducts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts">ApigeeDeveloperAppCredentialsApiProducts</a>

---


### ApigeeDeveloperAppCredentialsAttributesList <a name="ApigeeDeveloperAppCredentialsAttributesList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentialsAttributesList;

new ApigeeDeveloperAppCredentialsAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get"></a>

```java
public ApigeeDeveloperAppCredentialsAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApigeeDeveloperAppCredentialsAttributesOutputReference <a name="ApigeeDeveloperAppCredentialsAttributesOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentialsAttributesOutputReference;

new ApigeeDeveloperAppCredentialsAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes">ApigeeDeveloperAppCredentialsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue"></a>

```java
public ApigeeDeveloperAppCredentialsAttributes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes">ApigeeDeveloperAppCredentialsAttributes</a>

---


### ApigeeDeveloperAppCredentialsList <a name="ApigeeDeveloperAppCredentialsList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentialsList;

new ApigeeDeveloperAppCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get"></a>

```java
public ApigeeDeveloperAppCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApigeeDeveloperAppCredentialsOutputReference <a name="ApigeeDeveloperAppCredentialsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppCredentialsOutputReference;

new ApigeeDeveloperAppCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.apiProducts">apiProducts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList">ApigeeDeveloperAppCredentialsApiProductsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList">ApigeeDeveloperAppCredentialsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.issuedAt">issuedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials">ApigeeDeveloperAppCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiProducts`<sup>Required</sup> <a name="apiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.apiProducts"></a>

```java
public ApigeeDeveloperAppCredentialsApiProductsList getApiProducts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList">ApigeeDeveloperAppCredentialsApiProductsList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.attributes"></a>

```java
public ApigeeDeveloperAppCredentialsAttributesList getAttributes();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList">ApigeeDeveloperAppCredentialsAttributesList</a>

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `issuedAt`<sup>Required</sup> <a name="issuedAt" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.issuedAt"></a>

```java
public java.lang.String getIssuedAt();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.internalValue"></a>

```java
public ApigeeDeveloperAppCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials">ApigeeDeveloperAppCredentials</a>

---


### ApigeeDeveloperAppTimeoutsOutputReference <a name="ApigeeDeveloperAppTimeoutsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_developer_app.ApigeeDeveloperAppTimeoutsOutputReference;

new ApigeeDeveloperAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigeeDeveloperAppTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

---



