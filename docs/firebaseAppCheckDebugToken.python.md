# `firebaseAppCheckDebugToken` Submodule <a name="`firebaseAppCheckDebugToken` Submodule" id="@cdktn/provider-google.firebaseAppCheckDebugToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckDebugToken <a name="FirebaseAppCheckDebugToken" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token google_firebase_app_check_debug_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer"></a>

```python
from cdktn_provider_google import firebase_app_check_debug_token

firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  display_name: str,
  token: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirebaseAppCheckDebugTokenTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The ID of a [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id), [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id), or [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id). |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A human readable display name used to identify this debug token. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.token">token</a></code> | <code>str</code> | The secret token itself. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#id FirebaseAppCheckDebugToken#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#project FirebaseAppCheckDebugToken#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts">FirebaseAppCheckDebugTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.appId"></a>

- *Type:* str

The ID of a [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id), [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id), or [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#app_id FirebaseAppCheckDebugToken#app_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.displayName"></a>

- *Type:* str

A human readable display name used to identify this debug token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#display_name FirebaseAppCheckDebugToken#display_name}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.token"></a>

- *Type:* str

The secret token itself.

Must be provided during creation, and must be a UUID4,
case insensitive. You may use a method of your choice such as random/random_uuid
to generate the token.

This field is immutable once set, and cannot be updated. You can, however, delete
this debug token to revoke it.

For security reasons, this field will never be populated in any response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#token FirebaseAppCheckDebugToken#token}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#deletion_policy FirebaseAppCheckDebugToken#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#id FirebaseAppCheckDebugToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#project FirebaseAppCheckDebugToken#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts">FirebaseAppCheckDebugTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#timeouts FirebaseAppCheckDebugToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#create FirebaseAppCheckDebugToken#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#delete FirebaseAppCheckDebugToken#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#update FirebaseAppCheckDebugToken#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FirebaseAppCheckDebugToken resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isConstruct"></a>

```python
from cdktn_provider_google import firebase_app_check_debug_token

firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isTerraformElement"></a>

```python
from cdktn_provider_google import firebase_app_check_debug_token

firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isTerraformResource"></a>

```python
from cdktn_provider_google import firebase_app_check_debug_token

firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.generateConfigForImport"></a>

```python
from cdktn_provider_google import firebase_app_check_debug_token

firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FirebaseAppCheckDebugToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaseAppCheckDebugToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaseAppCheckDebugToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckDebugToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.debugTokenId">debug_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference">FirebaseAppCheckDebugTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts">FirebaseAppCheckDebugTokenTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `debug_token_id`<sup>Required</sup> <a name="debug_token_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.debugTokenId"></a>

```python
debug_token_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.timeouts"></a>

```python
timeouts: FirebaseAppCheckDebugTokenTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference">FirebaseAppCheckDebugTokenTimeoutsOutputReference</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FirebaseAppCheckDebugTokenTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts">FirebaseAppCheckDebugTokenTimeouts</a>

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckDebugTokenConfig <a name="FirebaseAppCheckDebugTokenConfig" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import firebase_app_check_debug_token

firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  display_name: str,
  token: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirebaseAppCheckDebugTokenTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.appId">app_id</a></code> | <code>str</code> | The ID of a [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id), [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id), or [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id). |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.displayName">display_name</a></code> | <code>str</code> | A human readable display name used to identify this debug token. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.token">token</a></code> | <code>str</code> | The secret token itself. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#id FirebaseAppCheckDebugToken#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#project FirebaseAppCheckDebugToken#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts">FirebaseAppCheckDebugTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The ID of a [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id), [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id), or [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#app_id FirebaseAppCheckDebugToken#app_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A human readable display name used to identify this debug token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#display_name FirebaseAppCheckDebugToken#display_name}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The secret token itself.

Must be provided during creation, and must be a UUID4,
case insensitive. You may use a method of your choice such as random/random_uuid
to generate the token.

This field is immutable once set, and cannot be updated. You can, however, delete
this debug token to revoke it.

For security reasons, this field will never be populated in any response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#token FirebaseAppCheckDebugToken#token}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#deletion_policy FirebaseAppCheckDebugToken#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#id FirebaseAppCheckDebugToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#project FirebaseAppCheckDebugToken#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenConfig.property.timeouts"></a>

```python
timeouts: FirebaseAppCheckDebugTokenTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts">FirebaseAppCheckDebugTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#timeouts FirebaseAppCheckDebugToken#timeouts}

---

### FirebaseAppCheckDebugTokenTimeouts <a name="FirebaseAppCheckDebugTokenTimeouts" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts.Initializer"></a>

```python
from cdktn_provider_google import firebase_app_check_debug_token

firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#create FirebaseAppCheckDebugToken#create}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#delete FirebaseAppCheckDebugToken#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#update FirebaseAppCheckDebugToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#create FirebaseAppCheckDebugToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#delete FirebaseAppCheckDebugToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firebase_app_check_debug_token#update FirebaseAppCheckDebugToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckDebugTokenTimeoutsOutputReference <a name="FirebaseAppCheckDebugTokenTimeoutsOutputReference" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_app_check_debug_token

firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts">FirebaseAppCheckDebugTokenTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseAppCheckDebugTokenTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppCheckDebugToken.FirebaseAppCheckDebugTokenTimeouts">FirebaseAppCheckDebugTokenTimeouts</a>

---



