# `apihubAddon` Submodule <a name="`apihubAddon` Submodule" id="@cdktn/provider-google.apihubAddon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubAddon <a name="ApihubAddon" id="@cdktn/provider-google.apihubAddon.ApihubAddon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon google_apihub_addon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddon(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  addon_id: str,
  config: ApihubAddonConfigA,
  location: str,
  id: str = None,
  project: str = None,
  timeouts: ApihubAddonTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.addonId">addon_id</a></code> | <code>str</code> | The ID of the addon. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `addon_id`<sup>Required</sup> <a name="addon_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.addonId"></a>

- *Type:* str

The ID of the addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#addon_id ApihubAddon#addon_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#config ApihubAddon#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#location ApihubAddon#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#timeouts ApihubAddon#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apihubAddon.ApihubAddon.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apihubAddon.ApihubAddon.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apihubAddon.ApihubAddon.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig"></a>

```python
def put_config(
  all_data_addon_config: ApihubAddonConfigAllDataAddonConfig = None,
  gateway_plugin_addon_config: ApihubAddonConfigGatewayPluginAddonConfig = None
) -> None
```

###### `all_data_addon_config`<sup>Optional</sup> <a name="all_data_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig.parameter.allDataAddonConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

all_data_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_data_addon_config ApihubAddon#all_data_addon_config}

---

###### `gateway_plugin_addon_config`<sup>Optional</sup> <a name="gateway_plugin_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig.parameter.gatewayPluginAddonConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

gateway_plugin_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_addon_config ApihubAddon#gateway_plugin_addon_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApihubAddon resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddon.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddon.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddon.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddon.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApihubAddon resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApihubAddon to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApihubAddon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApihubAddon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.boostSpecGeminiRegionId">boost_spec_gemini_region_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference">ApihubAddonConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference">ApihubAddonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonIdInput">addon_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.configInput">config_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonId">addon_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `boost_spec_gemini_region_id`<sup>Required</sup> <a name="boost_spec_gemini_region_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.boostSpecGeminiRegionId"></a>

```python
boost_spec_gemini_region_id: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.config"></a>

```python
config: ApihubAddonConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference">ApihubAddonConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeouts"></a>

```python
timeouts: ApihubAddonTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference">ApihubAddonTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `addon_id_input`<sup>Optional</sup> <a name="addon_id_input" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonIdInput"></a>

```python
addon_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.configInput"></a>

```python
config_input: ApihubAddonConfigA
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApihubAddonTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---

##### `addon_id`<sup>Required</sup> <a name="addon_id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonId"></a>

```python
addon_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubAddonConfig <a name="ApihubAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  addon_id: str,
  config: ApihubAddonConfigA,
  location: str,
  id: str = None,
  project: str = None,
  timeouts: ApihubAddonTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.addonId">addon_id</a></code> | <code>str</code> | The ID of the addon. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `addon_id`<sup>Required</sup> <a name="addon_id" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.addonId"></a>

```python
addon_id: str
```

- *Type:* str

The ID of the addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#addon_id ApihubAddon#addon_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.config"></a>

```python
config: ApihubAddonConfigA
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#config ApihubAddon#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#location ApihubAddon#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.timeouts"></a>

```python
timeouts: ApihubAddonTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#timeouts ApihubAddon#timeouts}

---

### ApihubAddonConfigA <a name="ApihubAddonConfigA" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigA(
  all_data_addon_config: ApihubAddonConfigAllDataAddonConfig = None,
  gateway_plugin_addon_config: ApihubAddonConfigGatewayPluginAddonConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.allDataAddonConfig">all_data_addon_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | all_data_addon_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.gatewayPluginAddonConfig">gateway_plugin_addon_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | gateway_plugin_addon_config block. |

---

##### `all_data_addon_config`<sup>Optional</sup> <a name="all_data_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.allDataAddonConfig"></a>

```python
all_data_addon_config: ApihubAddonConfigAllDataAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

all_data_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_data_addon_config ApihubAddon#all_data_addon_config}

---

##### `gateway_plugin_addon_config`<sup>Optional</sup> <a name="gateway_plugin_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.gatewayPluginAddonConfig"></a>

```python
gateway_plugin_addon_config: ApihubAddonConfigGatewayPluginAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

gateway_plugin_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_addon_config ApihubAddon#gateway_plugin_addon_config}

---

### ApihubAddonConfigAllDataAddonConfig <a name="ApihubAddonConfigAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigAllDataAddonConfig(
  enabled: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the addon is enabled for all data in the API hub. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the addon is enabled for all data in the API hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#enabled ApihubAddon#enabled}

---

### ApihubAddonConfigGatewayPluginAddonConfig <a name="ApihubAddonConfigGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig(
  gateway_plugin_configs: IResolvable | typing.List[ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.property.gatewayPluginConfigs">gateway_plugin_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>]</code> | gateway_plugin_configs block. |

---

##### `gateway_plugin_configs`<sup>Required</sup> <a name="gateway_plugin_configs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.property.gatewayPluginConfigs"></a>

```python
gateway_plugin_configs: IResolvable | typing.List[ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>]

gateway_plugin_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_configs ApihubAddon#gateway_plugin_configs}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs(
  plugin_instance: str,
  apigee_edge_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig = None,
  apigee_opdk_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig = None,
  apigee_x_hybrid_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeEdgeConfig">apigee_edge_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | apigee_edge_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeOpdkConfig">apigee_opdk_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | apigee_opdk_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeXHybridConfig">apigee_x_hybrid_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | apigee_x_hybrid_config block. |

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#plugin_instance ApihubAddon#plugin_instance}

---

##### `apigee_edge_config`<sup>Optional</sup> <a name="apigee_edge_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeEdgeConfig"></a>

```python
apigee_edge_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

apigee_edge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_edge_config ApihubAddon#apigee_edge_config}

---

##### `apigee_opdk_config`<sup>Optional</sup> <a name="apigee_opdk_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeOpdkConfig"></a>

```python
apigee_opdk_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

apigee_opdk_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_opdk_config ApihubAddon#apigee_opdk_config}

---

##### `apigee_x_hybrid_config`<sup>Optional</sup> <a name="apigee_x_hybrid_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeXHybridConfig"></a>

```python
apigee_x_hybrid_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

apigee_x_hybrid_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_x_hybrid_config ApihubAddon#apigee_x_hybrid_config}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig(
  environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.property.environmentFilter">environment_filter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `environment_filter`<sup>Optional</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.property.environmentFilter"></a>

```python
environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter(
  all_environments: bool | IResolvable = None,
  environments: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.allEnvironments">all_environments</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.environments">environments</a></code> | <code>typing.List[str]</code> | If provided, only environments in this list are matched. |

---

##### `all_environments`<sup>Optional</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.allEnvironments"></a>

```python
all_environments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig(
  environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.property.environmentFilter">environment_filter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `environment_filter`<sup>Optional</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.property.environmentFilter"></a>

```python
environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter(
  all_environments: bool | IResolvable = None,
  environments: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.allEnvironments">all_environments</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.environments">environments</a></code> | <code>typing.List[str]</code> | If provided, only environments in this list are matched. |

---

##### `all_environments`<sup>Optional</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.allEnvironments"></a>

```python
all_environments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig(
  environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.property.environmentFilter">environment_filter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `environment_filter`<sup>Optional</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.property.environmentFilter"></a>

```python
environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter(
  all_environments: bool | IResolvable = None,
  environments: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.allEnvironments">all_environments</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.environments">environments</a></code> | <code>typing.List[str]</code> | If provided, only environments in this list are matched. |

---

##### `all_environments`<sup>Optional</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.allEnvironments"></a>

```python
all_environments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonTimeouts <a name="ApihubAddonTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubAddonConfigAllDataAddonConfigOutputReference <a name="ApihubAddonConfigAllDataAddonConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigAllDataAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---


### ApihubAddonConfigAOutputReference <a name="ApihubAddonConfigAOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig">put_all_data_addon_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig">put_gateway_plugin_addon_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetAllDataAddonConfig">reset_all_data_addon_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetGatewayPluginAddonConfig">reset_gateway_plugin_addon_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_all_data_addon_config` <a name="put_all_data_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig"></a>

```python
def put_all_data_addon_config(
  enabled: bool | IResolvable
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

If true, the addon is enabled for all data in the API hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#enabled ApihubAddon#enabled}

---

##### `put_gateway_plugin_addon_config` <a name="put_gateway_plugin_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig"></a>

```python
def put_gateway_plugin_addon_config(
  gateway_plugin_configs: IResolvable | typing.List[ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs]
) -> None
```

###### `gateway_plugin_configs`<sup>Required</sup> <a name="gateway_plugin_configs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig.parameter.gatewayPluginConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>]

gateway_plugin_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_configs ApihubAddon#gateway_plugin_configs}

---

##### `reset_all_data_addon_config` <a name="reset_all_data_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetAllDataAddonConfig"></a>

```python
def reset_all_data_addon_config() -> None
```

##### `reset_gateway_plugin_addon_config` <a name="reset_gateway_plugin_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetGatewayPluginAddonConfig"></a>

```python
def reset_gateway_plugin_addon_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfig">all_data_addon_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference">ApihubAddonConfigAllDataAddonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfig">gateway_plugin_addon_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfigInput">all_data_addon_config_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfigInput">gateway_plugin_addon_config_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_data_addon_config`<sup>Required</sup> <a name="all_data_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfig"></a>

```python
all_data_addon_config: ApihubAddonConfigAllDataAddonConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference">ApihubAddonConfigAllDataAddonConfigOutputReference</a>

---

##### `gateway_plugin_addon_config`<sup>Required</sup> <a name="gateway_plugin_addon_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfig"></a>

```python
gateway_plugin_addon_config: ApihubAddonConfigGatewayPluginAddonConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigOutputReference</a>

---

##### `all_data_addon_config_input`<sup>Optional</sup> <a name="all_data_addon_config_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfigInput"></a>

```python
all_data_addon_config_input: ApihubAddonConfigAllDataAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---

##### `gateway_plugin_addon_config_input`<sup>Optional</sup> <a name="gateway_plugin_addon_config_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfigInput"></a>

```python
gateway_plugin_addon_config_input: ApihubAddonConfigGatewayPluginAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigA
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetAllEnvironments">reset_all_environments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetEnvironments">reset_environments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_environments` <a name="reset_all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```python
def reset_all_environments() -> None
```

##### `reset_environments` <a name="reset_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```python
def reset_environments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">all_environments_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environmentsInput">environments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironments">all_environments</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environments">environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_environments_input`<sup>Optional</sup> <a name="all_environments_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```python
all_environments_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environments_input`<sup>Optional</sup> <a name="environments_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```python
environments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_environments`<sup>Required</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```python
all_environments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter">put_environment_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resetEnvironmentFilter">reset_environment_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment_filter` <a name="put_environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter"></a>

```python
def put_environment_filter(
  all_environments: bool | IResolvable = None,
  environments: typing.List[str] = None
) -> None
```

###### `all_environments`<sup>Optional</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter.parameter.allEnvironments"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

###### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter.parameter.environments"></a>

- *Type:* typing.List[str]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

##### `reset_environment_filter` <a name="reset_environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resetEnvironmentFilter"></a>

```python
def reset_environment_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilter">environment_filter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilterInput">environment_filter_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_filter`<sup>Required</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilter"></a>

```python
environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference</a>

---

##### `environment_filter_input`<sup>Optional</sup> <a name="environment_filter_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilterInput"></a>

```python
environment_filter_input: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetAllEnvironments">reset_all_environments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetEnvironments">reset_environments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_environments` <a name="reset_all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```python
def reset_all_environments() -> None
```

##### `reset_environments` <a name="reset_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```python
def reset_environments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">all_environments_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environmentsInput">environments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironments">all_environments</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environments">environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_environments_input`<sup>Optional</sup> <a name="all_environments_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```python
all_environments_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environments_input`<sup>Optional</sup> <a name="environments_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```python
environments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_environments`<sup>Required</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```python
all_environments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter">put_environment_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resetEnvironmentFilter">reset_environment_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment_filter` <a name="put_environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter"></a>

```python
def put_environment_filter(
  all_environments: bool | IResolvable = None,
  environments: typing.List[str] = None
) -> None
```

###### `all_environments`<sup>Optional</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter.parameter.allEnvironments"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

###### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter.parameter.environments"></a>

- *Type:* typing.List[str]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

##### `reset_environment_filter` <a name="reset_environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resetEnvironmentFilter"></a>

```python
def reset_environment_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilter">environment_filter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilterInput">environment_filter_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_filter`<sup>Required</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilter"></a>

```python
environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference</a>

---

##### `environment_filter_input`<sup>Optional</sup> <a name="environment_filter_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilterInput"></a>

```python
environment_filter_input: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetAllEnvironments">reset_all_environments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetEnvironments">reset_environments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_environments` <a name="reset_all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```python
def reset_all_environments() -> None
```

##### `reset_environments` <a name="reset_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```python
def reset_environments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">all_environments_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environmentsInput">environments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironments">all_environments</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environments">environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_environments_input`<sup>Optional</sup> <a name="all_environments_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```python
all_environments_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environments_input`<sup>Optional</sup> <a name="environments_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```python
environments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_environments`<sup>Required</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```python
all_environments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter">put_environment_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resetEnvironmentFilter">reset_environment_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment_filter` <a name="put_environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter"></a>

```python
def put_environment_filter(
  all_environments: bool | IResolvable = None,
  environments: typing.List[str] = None
) -> None
```

###### `all_environments`<sup>Optional</sup> <a name="all_environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter.parameter.allEnvironments"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

###### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter.parameter.environments"></a>

- *Type:* typing.List[str]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

##### `reset_environment_filter` <a name="reset_environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resetEnvironmentFilter"></a>

```python
def reset_environment_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilter">environment_filter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilterInput">environment_filter_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_filter`<sup>Required</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilter"></a>

```python
environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference</a>

---

##### `environment_filter_input`<sup>Optional</sup> <a name="environment_filter_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilterInput"></a>

```python
environment_filter_input: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>]

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig">put_apigee_edge_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig">put_apigee_opdk_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig">put_apigee_x_hybrid_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeEdgeConfig">reset_apigee_edge_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeOpdkConfig">reset_apigee_opdk_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeXHybridConfig">reset_apigee_x_hybrid_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apigee_edge_config` <a name="put_apigee_edge_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig"></a>

```python
def put_apigee_edge_config(
  environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter = None
) -> None
```

###### `environment_filter`<sup>Optional</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig.parameter.environmentFilter"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

##### `put_apigee_opdk_config` <a name="put_apigee_opdk_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig"></a>

```python
def put_apigee_opdk_config(
  environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter = None
) -> None
```

###### `environment_filter`<sup>Optional</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig.parameter.environmentFilter"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

##### `put_apigee_x_hybrid_config` <a name="put_apigee_x_hybrid_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig"></a>

```python
def put_apigee_x_hybrid_config(
  environment_filter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter = None
) -> None
```

###### `environment_filter`<sup>Optional</sup> <a name="environment_filter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig.parameter.environmentFilter"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

##### `reset_apigee_edge_config` <a name="reset_apigee_edge_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeEdgeConfig"></a>

```python
def reset_apigee_edge_config() -> None
```

##### `reset_apigee_opdk_config` <a name="reset_apigee_opdk_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeOpdkConfig"></a>

```python
def reset_apigee_opdk_config() -> None
```

##### `reset_apigee_x_hybrid_config` <a name="reset_apigee_x_hybrid_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeXHybridConfig"></a>

```python
def reset_apigee_x_hybrid_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfig">apigee_edge_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfig">apigee_opdk_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfig">apigee_x_hybrid_config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfigInput">apigee_edge_config_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfigInput">apigee_opdk_config_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfigInput">apigee_x_hybrid_config_input</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstanceInput">plugin_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apigee_edge_config`<sup>Required</sup> <a name="apigee_edge_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfig"></a>

```python
apigee_edge_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference</a>

---

##### `apigee_opdk_config`<sup>Required</sup> <a name="apigee_opdk_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfig"></a>

```python
apigee_opdk_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference</a>

---

##### `apigee_x_hybrid_config`<sup>Required</sup> <a name="apigee_x_hybrid_config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfig"></a>

```python
apigee_x_hybrid_config: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference</a>

---

##### `apigee_edge_config_input`<sup>Optional</sup> <a name="apigee_edge_config_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfigInput"></a>

```python
apigee_edge_config_input: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---

##### `apigee_opdk_config_input`<sup>Optional</sup> <a name="apigee_opdk_config_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfigInput"></a>

```python
apigee_opdk_config_input: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---

##### `apigee_x_hybrid_config_input`<sup>Optional</sup> <a name="apigee_x_hybrid_config_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfigInput"></a>

```python
apigee_x_hybrid_config_input: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---

##### `plugin_instance_input`<sup>Optional</sup> <a name="plugin_instance_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstanceInput"></a>

```python
plugin_instance_input: str
```

- *Type:* str

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs">put_gateway_plugin_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gateway_plugin_configs` <a name="put_gateway_plugin_configs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs"></a>

```python
def put_gateway_plugin_configs(
  value: IResolvable | typing.List[ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigs">gateway_plugin_configs</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigsInput">gateway_plugin_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_plugin_configs`<sup>Required</sup> <a name="gateway_plugin_configs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigs"></a>

```python
gateway_plugin_configs: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList</a>

---

##### `gateway_plugin_configs_input`<sup>Optional</sup> <a name="gateway_plugin_configs_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigsInput"></a>

```python
gateway_plugin_configs_input: IResolvable | typing.List[ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApihubAddonConfigGatewayPluginAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---


### ApihubAddonTimeoutsOutputReference <a name="ApihubAddonTimeoutsOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_addon

apihubAddon.ApihubAddonTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApihubAddonTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---



