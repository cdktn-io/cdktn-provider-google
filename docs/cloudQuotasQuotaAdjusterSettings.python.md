# `cloudQuotasQuotaAdjusterSettings` Submodule <a name="`cloudQuotasQuotaAdjusterSettings` Submodule" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudQuotasQuotaAdjusterSettings <a name="CloudQuotasQuotaAdjusterSettings" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings google_cloud_quotas_quota_adjuster_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer"></a>

```python
from cdktn_provider_google import cloud_quotas_quota_adjuster_settings

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enablement: str,
  id: str = None,
  parent: str = None,
  timeouts: CloudQuotasQuotaAdjusterSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.enablement">enablement</a></code> | <code>str</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.enablement"></a>

- *Type:* str

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#enablement CloudQuotasQuotaAdjusterSettings#enablement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#parent CloudQuotasQuotaAdjusterSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#timeouts CloudQuotasQuotaAdjusterSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct"></a>

```python
from cdktn_provider_google import cloud_quotas_quota_adjuster_settings

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement"></a>

```python
from cdktn_provider_google import cloud_quotas_quota_adjuster_settings

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource"></a>

```python
from cdktn_provider_google import cloud_quotas_quota_adjuster_settings

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport"></a>

```python
from cdktn_provider_google import cloud_quotas_quota_adjuster_settings

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudQuotasQuotaAdjusterSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudQuotasQuotaAdjusterSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudQuotasQuotaAdjusterSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveContainer">effective_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveEnablement">effective_enablement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inherited">inherited</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inheritedFrom">inherited_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablementInput">enablement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablement">enablement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_container`<sup>Required</sup> <a name="effective_container" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveContainer"></a>

```python
effective_container: str
```

- *Type:* str

---

##### `effective_enablement`<sup>Required</sup> <a name="effective_enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveEnablement"></a>

```python
effective_enablement: str
```

- *Type:* str

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inherited"></a>

```python
inherited: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `inherited_from`<sup>Required</sup> <a name="inherited_from" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inheritedFrom"></a>

```python
inherited_from: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeouts"></a>

```python
timeouts: CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a>

---

##### `enablement_input`<sup>Optional</sup> <a name="enablement_input" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablementInput"></a>

```python
enablement_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CloudQuotasQuotaAdjusterSettingsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablement"></a>

```python
enablement: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudQuotasQuotaAdjusterSettingsConfig <a name="CloudQuotasQuotaAdjusterSettingsConfig" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.Initializer"></a>

```python
from cdktn_provider_google import cloud_quotas_quota_adjuster_settings

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enablement: str,
  id: str = None,
  parent: str = None,
  timeouts: CloudQuotasQuotaAdjusterSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.enablement">enablement</a></code> | <code>str</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.enablement"></a>

```python
enablement: str
```

- *Type:* str

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#enablement CloudQuotasQuotaAdjusterSettings#enablement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#parent CloudQuotasQuotaAdjusterSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.timeouts"></a>

```python
timeouts: CloudQuotasQuotaAdjusterSettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#timeouts CloudQuotasQuotaAdjusterSettings#timeouts}

---

### CloudQuotasQuotaAdjusterSettingsTimeouts <a name="CloudQuotasQuotaAdjusterSettingsTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.Initializer"></a>

```python
from cdktn_provider_google import cloud_quotas_quota_adjuster_settings

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference <a name="CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_quotas_quota_adjuster_settings

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudQuotasQuotaAdjusterSettingsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---



