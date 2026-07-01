# `apigeeDeveloperApp` Submodule <a name="`apigeeDeveloperApp` Submodule" id="@cdktn/provider-google.apigeeDeveloperApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeDeveloperApp <a name="ApigeeDeveloperApp" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app google_apigee_developer_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  callback_url: str,
  developer_email: str,
  name: str,
  org_id: str,
  api_products: typing.List[str] = None,
  app_family: str = None,
  attributes: IResolvable | typing.List[ApigeeDeveloperAppAttributes] = None,
  consumer_key: str = None,
  consumer_secret: str = None,
  deletion_policy: str = None,
  id: str = None,
  key_expires_in: str = None,
  scopes: typing.List[str] = None,
  status: str = None,
  timeouts: ApigeeDeveloperAppTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.callbackUrl">callback_url</a></code> | <code>str</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.developerEmail">developer_email</a></code> | <code>str</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.apiProducts">api_products</a></code> | <code>typing.List[str]</code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.appFamily">app_family</a></code> | <code>str</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.attributes">attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]</code> | attributes block. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.consumerKey">consumer_key</a></code> | <code>str</code> | Optionally specify a static consumer key for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.consumerSecret">consumer_secret</a></code> | <code>str</code> | Optionally specify a static consumer secret for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.keyExpiresIn">key_expires_in</a></code> | <code>str</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.callbackUrl"></a>

- *Type:* str

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#callback_url ApigeeDeveloperApp#callback_url}

---

##### `developer_email`<sup>Required</sup> <a name="developer_email" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.developerEmail"></a>

- *Type:* str

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#developer_email ApigeeDeveloperApp#developer_email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.name"></a>

- *Type:* str

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#org_id ApigeeDeveloperApp#org_id}

---

##### `api_products`<sup>Optional</sup> <a name="api_products" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.apiProducts"></a>

- *Type:* typing.List[str]

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#api_products ApigeeDeveloperApp#api_products}

---

##### `app_family`<sup>Optional</sup> <a name="app_family" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.appFamily"></a>

- *Type:* str

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#app_family ApigeeDeveloperApp#app_family}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.attributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#attributes ApigeeDeveloperApp#attributes}

---

##### `consumer_key`<sup>Optional</sup> <a name="consumer_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.consumerKey"></a>

- *Type:* str

Optionally specify a static consumer key for the developer app's credential.

If not set, the API auto-generates a key. The consumer key must be unique
across all developer apps in an organization. Changing this field forces the
resource to be recreated.

This is a write-only input used at create time: the provider creates the
credential with this key via the keys API and removes the auto-generated
one. The effective key is exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#consumer_key ApigeeDeveloperApp#consumer_key}

---

##### `consumer_secret`<sup>Optional</sup> <a name="consumer_secret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.consumerSecret"></a>

- *Type:* str

Optionally specify a static consumer secret for the developer app's credential.

Required if 'consumer_key' is specified. If not set, the API
auto-generates a secret. Changing this field forces the resource to be
recreated.

This is a write-only input used at create time; the effective secret is
exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#consumer_secret ApigeeDeveloperApp#consumer_secret}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#deletion_policy ApigeeDeveloperApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_expires_in`<sup>Optional</sup> <a name="key_expires_in" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.keyExpiresIn"></a>

- *Type:* str

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#key_expires_in ApigeeDeveloperApp#key_expires_in}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#scopes ApigeeDeveloperApp#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.status"></a>

- *Type:* str

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#status ApigeeDeveloperApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#timeouts ApigeeDeveloperApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetApiProducts">reset_api_products</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAppFamily">reset_app_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerKey">reset_consumer_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerSecret">reset_consumer_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetKeyExpiresIn">reset_key_expires_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes"></a>

```python
def put_attributes(
  value: IResolvable | typing.List[ApigeeDeveloperAppAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#create ApigeeDeveloperApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#delete ApigeeDeveloperApp#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#update ApigeeDeveloperApp#update}.

---

##### `reset_api_products` <a name="reset_api_products" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetApiProducts"></a>

```python
def reset_api_products() -> None
```

##### `reset_app_family` <a name="reset_app_family" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAppFamily"></a>

```python
def reset_app_family() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_consumer_key` <a name="reset_consumer_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerKey"></a>

```python
def reset_consumer_key() -> None
```

##### `reset_consumer_secret` <a name="reset_consumer_secret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetConsumerSecret"></a>

```python
def reset_consumer_secret() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_expires_in` <a name="reset_key_expires_in" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetKeyExpiresIn"></a>

```python
def reset_key_expires_in() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigeeDeveloperApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isConstruct"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperApp.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigeeDeveloperApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeDeveloperApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeDeveloperApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeDeveloperApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList">ApigeeDeveloperAppAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList">ApigeeDeveloperAppCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerId">developer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lastModifiedAt">last_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference">ApigeeDeveloperAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProductsInput">api_products_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamilyInput">app_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrlInput">callback_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKeyInput">consumer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecretInput">consumer_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmailInput">developer_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresInInput">key_expires_in_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProducts">api_products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamily">app_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrl">callback_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmail">developer_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresIn">key_expires_in</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributes"></a>

```python
attributes: ApigeeDeveloperAppAttributesList
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList">ApigeeDeveloperAppAttributesList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.credentials"></a>

```python
credentials: ApigeeDeveloperAppCredentialsList
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList">ApigeeDeveloperAppCredentialsList</a>

---

##### `developer_id`<sup>Required</sup> <a name="developer_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerId"></a>

```python
developer_id: str
```

- *Type:* str

---

##### `last_modified_at`<sup>Required</sup> <a name="last_modified_at" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.lastModifiedAt"></a>

```python
last_modified_at: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeouts"></a>

```python
timeouts: ApigeeDeveloperAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference">ApigeeDeveloperAppTimeoutsOutputReference</a>

---

##### `api_products_input`<sup>Optional</sup> <a name="api_products_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProductsInput"></a>

```python
api_products_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_family_input`<sup>Optional</sup> <a name="app_family_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamilyInput"></a>

```python
app_family_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.attributesInput"></a>

```python
attributes_input: IResolvable | typing.List[ApigeeDeveloperAppAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]

---

##### `callback_url_input`<sup>Optional</sup> <a name="callback_url_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrlInput"></a>

```python
callback_url_input: str
```

- *Type:* str

---

##### `consumer_key_input`<sup>Optional</sup> <a name="consumer_key_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKeyInput"></a>

```python
consumer_key_input: str
```

- *Type:* str

---

##### `consumer_secret_input`<sup>Optional</sup> <a name="consumer_secret_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecretInput"></a>

```python
consumer_secret_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `developer_email_input`<sup>Optional</sup> <a name="developer_email_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmailInput"></a>

```python
developer_email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_expires_in_input`<sup>Optional</sup> <a name="key_expires_in_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresInInput"></a>

```python
key_expires_in_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApigeeDeveloperAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

---

##### `api_products`<sup>Required</sup> <a name="api_products" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.apiProducts"></a>

```python
api_products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_family`<sup>Required</sup> <a name="app_family" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.appFamily"></a>

```python
app_family: str
```

- *Type:* str

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.callbackUrl"></a>

```python
callback_url: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `developer_email`<sup>Required</sup> <a name="developer_email" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.developerEmail"></a>

```python
developer_email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_expires_in`<sup>Required</sup> <a name="key_expires_in" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.keyExpiresIn"></a>

```python
key_expires_in: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeDeveloperAppAttributes <a name="ApigeeDeveloperAppAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#value ApigeeDeveloperApp#value}

---

### ApigeeDeveloperAppConfig <a name="ApigeeDeveloperAppConfig" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  callback_url: str,
  developer_email: str,
  name: str,
  org_id: str,
  api_products: typing.List[str] = None,
  app_family: str = None,
  attributes: IResolvable | typing.List[ApigeeDeveloperAppAttributes] = None,
  consumer_key: str = None,
  consumer_secret: str = None,
  deletion_policy: str = None,
  id: str = None,
  key_expires_in: str = None,
  scopes: typing.List[str] = None,
  status: str = None,
  timeouts: ApigeeDeveloperAppTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.callbackUrl">callback_url</a></code> | <code>str</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.developerEmail">developer_email</a></code> | <code>str</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.name">name</a></code> | <code>str</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.apiProducts">api_products</a></code> | <code>typing.List[str]</code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.appFamily">app_family</a></code> | <code>str</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.attributes">attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]</code> | attributes block. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerKey">consumer_key</a></code> | <code>str</code> | Optionally specify a static consumer key for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | Optionally specify a static consumer secret for the developer app's credential. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.keyExpiresIn">key_expires_in</a></code> | <code>str</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.status">status</a></code> | <code>str</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.callbackUrl"></a>

```python
callback_url: str
```

- *Type:* str

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#callback_url ApigeeDeveloperApp#callback_url}

---

##### `developer_email`<sup>Required</sup> <a name="developer_email" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.developerEmail"></a>

```python
developer_email: str
```

- *Type:* str

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#developer_email ApigeeDeveloperApp#developer_email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#org_id ApigeeDeveloperApp#org_id}

---

##### `api_products`<sup>Optional</sup> <a name="api_products" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.apiProducts"></a>

```python
api_products: typing.List[str]
```

- *Type:* typing.List[str]

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#api_products ApigeeDeveloperApp#api_products}

---

##### `app_family`<sup>Optional</sup> <a name="app_family" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.appFamily"></a>

```python
app_family: str
```

- *Type:* str

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#app_family ApigeeDeveloperApp#app_family}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.attributes"></a>

```python
attributes: IResolvable | typing.List[ApigeeDeveloperAppAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#attributes ApigeeDeveloperApp#attributes}

---

##### `consumer_key`<sup>Optional</sup> <a name="consumer_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

Optionally specify a static consumer key for the developer app's credential.

If not set, the API auto-generates a key. The consumer key must be unique
across all developer apps in an organization. Changing this field forces the
resource to be recreated.

This is a write-only input used at create time: the provider creates the
credential with this key via the keys API and removes the auto-generated
one. The effective key is exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#consumer_key ApigeeDeveloperApp#consumer_key}

---

##### `consumer_secret`<sup>Optional</sup> <a name="consumer_secret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

Optionally specify a static consumer secret for the developer app's credential.

Required if 'consumer_key' is specified. If not set, the API
auto-generates a secret. Changing this field forces the resource to be
recreated.

This is a write-only input used at create time; the effective secret is
exposed in the 'credentials' output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#consumer_secret ApigeeDeveloperApp#consumer_secret}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#deletion_policy ApigeeDeveloperApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_expires_in`<sup>Optional</sup> <a name="key_expires_in" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.keyExpiresIn"></a>

```python
key_expires_in: str
```

- *Type:* str

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#key_expires_in ApigeeDeveloperApp#key_expires_in}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#scopes ApigeeDeveloperApp#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#status ApigeeDeveloperApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppConfig.property.timeouts"></a>

```python
timeouts: ApigeeDeveloperAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#timeouts ApigeeDeveloperApp#timeouts}

---

### ApigeeDeveloperAppCredentials <a name="ApigeeDeveloperAppCredentials" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentials()
```


### ApigeeDeveloperAppCredentialsApiProducts <a name="ApigeeDeveloperAppCredentialsApiProducts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts()
```


### ApigeeDeveloperAppCredentialsAttributes <a name="ApigeeDeveloperAppCredentialsAttributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes()
```


### ApigeeDeveloperAppTimeouts <a name="ApigeeDeveloperAppTimeouts" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#create ApigeeDeveloperApp#create}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#delete ApigeeDeveloperApp#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#update ApigeeDeveloperApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#create ApigeeDeveloperApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#delete ApigeeDeveloperApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_developer_app#update ApigeeDeveloperApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeDeveloperAppAttributesList <a name="ApigeeDeveloperAppAttributesList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeDeveloperAppAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigeeDeveloperAppAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>]

---


### ApigeeDeveloperAppAttributesOutputReference <a name="ApigeeDeveloperAppAttributesOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeDeveloperAppAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppAttributes">ApigeeDeveloperAppAttributes</a>

---


### ApigeeDeveloperAppCredentialsApiProductsList <a name="ApigeeDeveloperAppCredentialsApiProductsList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeDeveloperAppCredentialsApiProductsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigeeDeveloperAppCredentialsApiProductsOutputReference <a name="ApigeeDeveloperAppCredentialsApiProductsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct">apiproduct</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts">ApigeeDeveloperAppCredentialsApiProducts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apiproduct`<sup>Required</sup> <a name="apiproduct" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct"></a>

```python
apiproduct: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeDeveloperAppCredentialsApiProducts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProducts">ApigeeDeveloperAppCredentialsApiProducts</a>

---


### ApigeeDeveloperAppCredentialsAttributesList <a name="ApigeeDeveloperAppCredentialsAttributesList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeDeveloperAppCredentialsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigeeDeveloperAppCredentialsAttributesOutputReference <a name="ApigeeDeveloperAppCredentialsAttributesOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes">ApigeeDeveloperAppCredentialsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeDeveloperAppCredentialsAttributes
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributes">ApigeeDeveloperAppCredentialsAttributes</a>

---


### ApigeeDeveloperAppCredentialsList <a name="ApigeeDeveloperAppCredentialsList" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeDeveloperAppCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigeeDeveloperAppCredentialsOutputReference <a name="ApigeeDeveloperAppCredentialsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.apiProducts">api_products</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList">ApigeeDeveloperAppCredentialsApiProductsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList">ApigeeDeveloperAppCredentialsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.issuedAt">issued_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials">ApigeeDeveloperAppCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_products`<sup>Required</sup> <a name="api_products" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.apiProducts"></a>

```python
api_products: ApigeeDeveloperAppCredentialsApiProductsList
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsApiProductsList">ApigeeDeveloperAppCredentialsApiProductsList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.attributes"></a>

```python
attributes: ApigeeDeveloperAppCredentialsAttributesList
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsAttributesList">ApigeeDeveloperAppCredentialsAttributesList</a>

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `issued_at`<sup>Required</sup> <a name="issued_at" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.issuedAt"></a>

```python
issued_at: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeDeveloperAppCredentials
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppCredentials">ApigeeDeveloperAppCredentials</a>

---


### ApigeeDeveloperAppTimeoutsOutputReference <a name="ApigeeDeveloperAppTimeoutsOutputReference" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_developer_app

apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeDeveloperAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeDeveloperApp.ApigeeDeveloperAppTimeouts">ApigeeDeveloperAppTimeouts</a>

---



