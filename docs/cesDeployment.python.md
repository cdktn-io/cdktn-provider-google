# `cesDeployment` Submodule <a name="`cesDeployment` Submodule" id="@cdktn/provider-google.cesDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesDeployment <a name="CesDeployment" id="@cdktn/provider-google.cesDeployment.CesDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment google_ces_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  app_version: str,
  channel_profile: CesDeploymentChannelProfile,
  display_name: str,
  location: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: CesDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.appVersion">app_version</a></code> | <code>str</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.channelProfile">channel_profile</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#id CesDeployment#id}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#project CesDeployment#project}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#app CesDeployment#app}

---

##### `app_version`<sup>Required</sup> <a name="app_version" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.appVersion"></a>

- *Type:* str

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#app_version CesDeployment#app_version}

---

##### `channel_profile`<sup>Required</sup> <a name="channel_profile" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.channelProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#channel_profile CesDeployment#channel_profile}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#display_name CesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#location CesDeployment#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#deletion_policy CesDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#id CesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#project CesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#timeouts CesDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile">put_channel_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesDeployment.CesDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesDeployment.CesDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesDeployment.CesDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cesDeployment.CesDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cesDeployment.CesDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cesDeployment.CesDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cesDeployment.CesDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_channel_profile` <a name="put_channel_profile" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile"></a>

```python
def put_channel_profile(
  channel_type: str = None,
  disable_barge_in_control: bool | IResolvable = None,
  disable_dtmf: bool | IResolvable = None,
  persona_property: CesDeploymentChannelProfilePersonaProperty = None,
  profile_id: str = None,
  web_widget_config: CesDeploymentChannelProfileWebWidgetConfig = None
) -> None
```

###### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile.parameter.channelType"></a>

- *Type:* str

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#channel_type CesDeployment#channel_type}

---

###### `disable_barge_in_control`<sup>Optional</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile.parameter.disableBargeInControl"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable user barge-in control in the conversation.

* **true**: User interruptions are disabled while the agent is speaking.
* **false**: The agent retains automatic control over when the user can
  interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#disable_barge_in_control CesDeployment#disable_barge_in_control}

---

###### `disable_dtmf`<sup>Optional</sup> <a name="disable_dtmf" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile.parameter.disableDtmf"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#disable_dtmf CesDeployment#disable_dtmf}

---

###### `persona_property`<sup>Optional</sup> <a name="persona_property" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile.parameter.personaProperty"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#persona_property CesDeployment#persona_property}

---

###### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile.parameter.profileId"></a>

- *Type:* str

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#profile_id CesDeployment#profile_id}

---

###### `web_widget_config`<sup>Optional</sup> <a name="web_widget_config" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile.parameter.webWidgetConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#web_widget_config CesDeployment#web_widget_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#create CesDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#delete CesDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#update CesDeployment#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CesDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CesDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfile">channel_profile</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference">CesDeploymentChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference">CesDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersionInput">app_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfileInput">channel_profile_input</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersion">app_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_profile`<sup>Required</sup> <a name="channel_profile" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfile"></a>

```python
channel_profile: CesDeploymentChannelProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference">CesDeploymentChannelProfileOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.timeouts"></a>

```python
timeouts: CesDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference">CesDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `app_version_input`<sup>Optional</sup> <a name="app_version_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersionInput"></a>

```python
app_version_input: str
```

- *Type:* str

---

##### `channel_profile_input`<sup>Optional</sup> <a name="channel_profile_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfileInput"></a>

```python
channel_profile_input: CesDeploymentChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CesDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `app_version`<sup>Required</sup> <a name="app_version" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersion"></a>

```python
app_version: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesDeploymentChannelProfile <a name="CesDeploymentChannelProfile" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentChannelProfile(
  channel_type: str = None,
  disable_barge_in_control: bool | IResolvable = None,
  disable_dtmf: bool | IResolvable = None,
  persona_property: CesDeploymentChannelProfilePersonaProperty = None,
  profile_id: str = None,
  web_widget_config: CesDeploymentChannelProfileWebWidgetConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.channelType">channel_type</a></code> | <code>str</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableBargeInControl">disable_barge_in_control</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable user barge-in control in the conversation. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableDtmf">disable_dtmf</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.personaProperty">persona_property</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.profileId">profile_id</a></code> | <code>str</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.webWidgetConfig">web_widget_config</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#channel_type CesDeployment#channel_type}

---

##### `disable_barge_in_control`<sup>Optional</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableBargeInControl"></a>

```python
disable_barge_in_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable user barge-in control in the conversation.

* **true**: User interruptions are disabled while the agent is speaking.
* **false**: The agent retains automatic control over when the user can
  interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#disable_barge_in_control CesDeployment#disable_barge_in_control}

---

##### `disable_dtmf`<sup>Optional</sup> <a name="disable_dtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableDtmf"></a>

```python
disable_dtmf: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#disable_dtmf CesDeployment#disable_dtmf}

---

##### `persona_property`<sup>Optional</sup> <a name="persona_property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.personaProperty"></a>

```python
persona_property: CesDeploymentChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#persona_property CesDeployment#persona_property}

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#profile_id CesDeployment#profile_id}

---

##### `web_widget_config`<sup>Optional</sup> <a name="web_widget_config" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.webWidgetConfig"></a>

```python
web_widget_config: CesDeploymentChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#web_widget_config CesDeployment#web_widget_config}

---

### CesDeploymentChannelProfilePersonaProperty <a name="CesDeploymentChannelProfilePersonaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentChannelProfilePersonaProperty(
  persona: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>str</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.property.persona"></a>

```python
persona: str
```

- *Type:* str

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#persona CesDeployment#persona}

---

### CesDeploymentChannelProfileWebWidgetConfig <a name="CesDeploymentChannelProfileWebWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentChannelProfileWebWidgetConfig(
  modality: str = None,
  security_settings: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings = None,
  theme: str = None,
  web_widget_title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>str</code> | The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.securitySettings">security_settings</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>str</code> | The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle">web_widget_title</a></code> | <code>str</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.modality"></a>

```python
modality: str
```

- *Type:* str

The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#modality CesDeployment#modality}

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.securitySettings"></a>

```python
security_settings: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#security_settings CesDeployment#security_settings}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.theme"></a>

```python
theme: str
```

- *Type:* str

The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#theme CesDeployment#theme}

---

##### `web_widget_title`<sup>Optional</sup> <a name="web_widget_title" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```python
web_widget_title: str
```

- *Type:* str

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#web_widget_title CesDeployment#web_widget_title}

---

### CesDeploymentChannelProfileWebWidgetConfigSecuritySettings <a name="CesDeploymentChannelProfileWebWidgetConfigSecuritySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings(
  allowed_origins: typing.List[str] = None,
  enable_origin_check: bool | IResolvable = None,
  enable_public_access: bool | IResolvable = None,
  enable_recaptcha: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | The origins that are allowed to host the web widget. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck">enable_origin_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether origin check for the web widget is enabled. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess">enable_public_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether public access to the web widget is enabled. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha">enable_recaptcha</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether reCAPTCHA verification for the web widget is enabled. |

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

The origins that are allowed to host the web widget.

An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#allowed_origins CesDeployment#allowed_origins}

---

##### `enable_origin_check`<sup>Optional</sup> <a name="enable_origin_check" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck"></a>

```python
enable_origin_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether origin check for the web widget is enabled.

If true, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#enable_origin_check CesDeployment#enable_origin_check}

---

##### `enable_public_access`<sup>Optional</sup> <a name="enable_public_access" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess"></a>

```python
enable_public_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether public access to the web widget is enabled.

If true, the web widget will be publicly accessible. If false, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#enable_public_access CesDeployment#enable_public_access}

---

##### `enable_recaptcha`<sup>Optional</sup> <a name="enable_recaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha"></a>

```python
enable_recaptcha: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether reCAPTCHA verification for the web widget is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#enable_recaptcha CesDeployment#enable_recaptcha}

---

### CesDeploymentConfig <a name="CesDeploymentConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  app_version: str,
  channel_profile: CesDeploymentChannelProfile,
  display_name: str,
  location: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: CesDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.appVersion">app_version</a></code> | <code>str</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.channelProfile">channel_profile</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#id CesDeployment#id}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#project CesDeployment#project}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#app CesDeployment#app}

---

##### `app_version`<sup>Required</sup> <a name="app_version" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.appVersion"></a>

```python
app_version: str
```

- *Type:* str

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#app_version CesDeployment#app_version}

---

##### `channel_profile`<sup>Required</sup> <a name="channel_profile" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.channelProfile"></a>

```python
channel_profile: CesDeploymentChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#channel_profile CesDeployment#channel_profile}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#display_name CesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#location CesDeployment#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#deletion_policy CesDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#id CesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#project CesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.timeouts"></a>

```python
timeouts: CesDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#timeouts CesDeployment#timeouts}

---

### CesDeploymentTimeouts <a name="CesDeploymentTimeouts" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#create CesDeployment#create}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#delete CesDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#update CesDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#create CesDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#delete CesDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#update CesDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesDeploymentChannelProfileOutputReference <a name="CesDeploymentChannelProfileOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentChannelProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty">put_persona_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig">put_web_widget_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetChannelType">reset_channel_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableBargeInControl">reset_disable_barge_in_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableDtmf">reset_disable_dtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetPersonaProperty">reset_persona_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetProfileId">reset_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWebWidgetConfig">reset_web_widget_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_persona_property` <a name="put_persona_property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty"></a>

```python
def put_persona_property(
  persona: str = None
) -> None
```

###### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty.parameter.persona"></a>

- *Type:* str

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#persona CesDeployment#persona}

---

##### `put_web_widget_config` <a name="put_web_widget_config" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig"></a>

```python
def put_web_widget_config(
  modality: str = None,
  security_settings: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings = None,
  theme: str = None,
  web_widget_title: str = None
) -> None
```

###### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.modality"></a>

- *Type:* str

The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#modality CesDeployment#modality}

---

###### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.securitySettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#security_settings CesDeployment#security_settings}

---

###### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.theme"></a>

- *Type:* str

The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#theme CesDeployment#theme}

---

###### `web_widget_title`<sup>Optional</sup> <a name="web_widget_title" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.webWidgetTitle"></a>

- *Type:* str

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#web_widget_title CesDeployment#web_widget_title}

---

##### `reset_channel_type` <a name="reset_channel_type" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetChannelType"></a>

```python
def reset_channel_type() -> None
```

##### `reset_disable_barge_in_control` <a name="reset_disable_barge_in_control" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableBargeInControl"></a>

```python
def reset_disable_barge_in_control() -> None
```

##### `reset_disable_dtmf` <a name="reset_disable_dtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableDtmf"></a>

```python
def reset_disable_dtmf() -> None
```

##### `reset_persona_property` <a name="reset_persona_property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetPersonaProperty"></a>

```python
def reset_persona_property() -> None
```

##### `reset_profile_id` <a name="reset_profile_id" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetProfileId"></a>

```python
def reset_profile_id() -> None
```

##### `reset_web_widget_config` <a name="reset_web_widget_config" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWebWidgetConfig"></a>

```python
def reset_web_widget_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaProperty">persona_property</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference">CesDeploymentChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfig">web_widget_config</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference">CesDeploymentChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelTypeInput">channel_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput">disable_barge_in_control_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmfInput">disable_dtmf_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaPropertyInput">persona_property_input</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput">web_widget_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelType">channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControl">disable_barge_in_control</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmf">disable_dtmf</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persona_property`<sup>Required</sup> <a name="persona_property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaProperty"></a>

```python
persona_property: CesDeploymentChannelProfilePersonaPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference">CesDeploymentChannelProfilePersonaPropertyOutputReference</a>

---

##### `web_widget_config`<sup>Required</sup> <a name="web_widget_config" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfig"></a>

```python
web_widget_config: CesDeploymentChannelProfileWebWidgetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference">CesDeploymentChannelProfileWebWidgetConfigOutputReference</a>

---

##### `channel_type_input`<sup>Optional</sup> <a name="channel_type_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelTypeInput"></a>

```python
channel_type_input: str
```

- *Type:* str

---

##### `disable_barge_in_control_input`<sup>Optional</sup> <a name="disable_barge_in_control_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```python
disable_barge_in_control_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_dtmf_input`<sup>Optional</sup> <a name="disable_dtmf_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmfInput"></a>

```python
disable_dtmf_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persona_property_input`<sup>Optional</sup> <a name="persona_property_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaPropertyInput"></a>

```python
persona_property_input: CesDeploymentChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `web_widget_config_input`<sup>Optional</sup> <a name="web_widget_config_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```python
web_widget_config_input: CesDeploymentChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `channel_type`<sup>Required</sup> <a name="channel_type" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

---

##### `disable_barge_in_control`<sup>Required</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControl"></a>

```python
disable_barge_in_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_dtmf`<sup>Required</sup> <a name="disable_dtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmf"></a>

```python
disable_dtmf: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.internalValue"></a>

```python
internal_value: CesDeploymentChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

---


### CesDeploymentChannelProfilePersonaPropertyOutputReference <a name="CesDeploymentChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona">reset_persona</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_persona` <a name="reset_persona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```python
def reset_persona() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput">persona_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persona_input`<sup>Optional</sup> <a name="persona_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```python
persona_input: str
```

- *Type:* str

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```python
persona: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```python
internal_value: CesDeploymentChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

---


### CesDeploymentChannelProfileWebWidgetConfigOutputReference <a name="CesDeploymentChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings">put_security_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality">reset_modality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings">reset_security_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme">reset_theme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">reset_web_widget_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_security_settings` <a name="put_security_settings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings"></a>

```python
def put_security_settings(
  allowed_origins: typing.List[str] = None,
  enable_origin_check: bool | IResolvable = None,
  enable_public_access: bool | IResolvable = None,
  enable_recaptcha: bool | IResolvable = None
) -> None
```

###### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

The origins that are allowed to host the web widget.

An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#allowed_origins CesDeployment#allowed_origins}

---

###### `enable_origin_check`<sup>Optional</sup> <a name="enable_origin_check" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.enableOriginCheck"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether origin check for the web widget is enabled.

If true, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#enable_origin_check CesDeployment#enable_origin_check}

---

###### `enable_public_access`<sup>Optional</sup> <a name="enable_public_access" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.enablePublicAccess"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether public access to the web widget is enabled.

If true, the web widget will be publicly accessible. If false, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#enable_public_access CesDeployment#enable_public_access}

---

###### `enable_recaptcha`<sup>Optional</sup> <a name="enable_recaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.enableRecaptcha"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether reCAPTCHA verification for the web widget is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_deployment#enable_recaptcha CesDeployment#enable_recaptcha}

---

##### `reset_modality` <a name="reset_modality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```python
def reset_modality() -> None
```

##### `reset_security_settings` <a name="reset_security_settings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings"></a>

```python
def reset_security_settings() -> None
```

##### `reset_theme` <a name="reset_theme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```python
def reset_theme() -> None
```

##### `reset_web_widget_title` <a name="reset_web_widget_title" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```python
def reset_web_widget_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings">security_settings</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput">security_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput">theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">web_widget_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">web_widget_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_settings`<sup>Required</sup> <a name="security_settings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings"></a>

```python
security_settings: CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a>

---

##### `modality_input`<sup>Optional</sup> <a name="modality_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```python
modality_input: str
```

- *Type:* str

---

##### `security_settings_input`<sup>Optional</sup> <a name="security_settings_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput"></a>

```python
security_settings_input: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `theme_input`<sup>Optional</sup> <a name="theme_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```python
theme_input: str
```

- *Type:* str

---

##### `web_widget_title_input`<sup>Optional</sup> <a name="web_widget_title_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```python
web_widget_title_input: str
```

- *Type:* str

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```python
modality: str
```

- *Type:* str

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```python
theme: str
```

- *Type:* str

---

##### `web_widget_title`<sup>Required</sup> <a name="web_widget_title" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```python
web_widget_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesDeploymentChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

---


### CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference <a name="CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins">reset_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck">reset_enable_origin_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess">reset_enable_public_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha">reset_enable_recaptcha</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_origins` <a name="reset_allowed_origins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins"></a>

```python
def reset_allowed_origins() -> None
```

##### `reset_enable_origin_check` <a name="reset_enable_origin_check" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck"></a>

```python
def reset_enable_origin_check() -> None
```

##### `reset_enable_public_access` <a name="reset_enable_public_access" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess"></a>

```python
def reset_enable_public_access() -> None
```

##### `reset_enable_recaptcha` <a name="reset_enable_recaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha"></a>

```python
def reset_enable_recaptcha() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput">enable_origin_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput">enable_public_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput">enable_recaptcha_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck">enable_origin_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess">enable_public_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha">enable_recaptcha</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_origin_check_input`<sup>Optional</sup> <a name="enable_origin_check_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput"></a>

```python
enable_origin_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_public_access_input`<sup>Optional</sup> <a name="enable_public_access_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput"></a>

```python
enable_public_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_recaptcha_input`<sup>Optional</sup> <a name="enable_recaptcha_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput"></a>

```python
enable_recaptcha_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_origin_check`<sup>Required</sup> <a name="enable_origin_check" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck"></a>

```python
enable_origin_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_public_access`<sup>Required</sup> <a name="enable_public_access" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess"></a>

```python
enable_public_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_recaptcha`<sup>Required</sup> <a name="enable_recaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha"></a>

```python
enable_recaptcha: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---


### CesDeploymentTimeoutsOutputReference <a name="CesDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_deployment

cesDeployment.CesDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

---



