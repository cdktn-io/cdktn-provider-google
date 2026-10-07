# `observabilityOrganizationSettings` Submodule <a name="`observabilityOrganizationSettings` Submodule" id="@cdktn/provider-google.observabilityOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityOrganizationSettings <a name="ObservabilityOrganizationSettings" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings google_observability_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer"></a>

```python
from cdktn_provider_google import observability_organization_settings

observabilityOrganizationSettings.ObservabilityOrganizationSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  organization: str,
  default_storage_location: str = None,
  id: str = None,
  kms_key_name: str = None,
  timeouts: ObservabilityOrganizationSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.defaultStorageLocation">default_storage_location</a></code> | <code>str</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#id ObservabilityOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.location"></a>

- *Type:* str

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#location ObservabilityOrganizationSettings#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.organization"></a>

- *Type:* str

The organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#organization ObservabilityOrganizationSettings#organization}

---

##### `default_storage_location`<sup>Optional</sup> <a name="default_storage_location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.defaultStorageLocation"></a>

- *Type:* str

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#default_storage_location ObservabilityOrganizationSettings#default_storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#id ObservabilityOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#kms_key_name ObservabilityOrganizationSettings#kms_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#timeouts ObservabilityOrganizationSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetDefaultStorageLocation">reset_default_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#create ObservabilityOrganizationSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#delete ObservabilityOrganizationSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#update ObservabilityOrganizationSettings#update}.

---

##### `reset_default_storage_location` <a name="reset_default_storage_location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetDefaultStorageLocation"></a>

```python
def reset_default_storage_location() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ObservabilityOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct"></a>

```python
from cdktn_provider_google import observability_organization_settings

observabilityOrganizationSettings.ObservabilityOrganizationSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement"></a>

```python
from cdktn_provider_google import observability_organization_settings

observabilityOrganizationSettings.ObservabilityOrganizationSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource"></a>

```python
from cdktn_provider_google import observability_organization_settings

observabilityOrganizationSettings.ObservabilityOrganizationSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport"></a>

```python
from cdktn_provider_google import observability_organization_settings

observabilityOrganizationSettings.ObservabilityOrganizationSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ObservabilityOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObservabilityOrganizationSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObservabilityOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference">ObservabilityOrganizationSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocationInput">default_storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocation">default_storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeouts"></a>

```python
timeouts: ObservabilityOrganizationSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference">ObservabilityOrganizationSettingsTimeoutsOutputReference</a>

---

##### `default_storage_location_input`<sup>Optional</sup> <a name="default_storage_location_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocationInput"></a>

```python
default_storage_location_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ObservabilityOrganizationSettingsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

---

##### `default_storage_location`<sup>Required</sup> <a name="default_storage_location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocation"></a>

```python
default_storage_location: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityOrganizationSettingsConfig <a name="ObservabilityOrganizationSettingsConfig" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.Initializer"></a>

```python
from cdktn_provider_google import observability_organization_settings

observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  organization: str,
  default_storage_location: str = None,
  id: str = None,
  kms_key_name: str = None,
  timeouts: ObservabilityOrganizationSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.location">location</a></code> | <code>str</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.organization">organization</a></code> | <code>str</code> | The organization ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.defaultStorageLocation">default_storage_location</a></code> | <code>str</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#id ObservabilityOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#location ObservabilityOrganizationSettings#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#organization ObservabilityOrganizationSettings#organization}

---

##### `default_storage_location`<sup>Optional</sup> <a name="default_storage_location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.defaultStorageLocation"></a>

```python
default_storage_location: str
```

- *Type:* str

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#default_storage_location ObservabilityOrganizationSettings#default_storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#id ObservabilityOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#kms_key_name ObservabilityOrganizationSettings#kms_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.timeouts"></a>

```python
timeouts: ObservabilityOrganizationSettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#timeouts ObservabilityOrganizationSettings#timeouts}

---

### ObservabilityOrganizationSettingsTimeouts <a name="ObservabilityOrganizationSettingsTimeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.Initializer"></a>

```python
from cdktn_provider_google import observability_organization_settings

observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#create ObservabilityOrganizationSettings#create}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#delete ObservabilityOrganizationSettings#delete}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#update ObservabilityOrganizationSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#create ObservabilityOrganizationSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#delete ObservabilityOrganizationSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#update ObservabilityOrganizationSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityOrganizationSettingsTimeoutsOutputReference <a name="ObservabilityOrganizationSettingsTimeoutsOutputReference" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import observability_organization_settings

observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ObservabilityOrganizationSettingsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

---



