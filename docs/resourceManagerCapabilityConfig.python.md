# `resourceManagerCapabilityConfig` Submodule <a name="`resourceManagerCapabilityConfig` Submodule" id="@cdktn/provider-google.resourceManagerCapabilityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerCapabilityConfigA <a name="ResourceManagerCapabilityConfigA" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config google_resource_manager_capability_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer"></a>

```python
from cdktn_provider_google import resource_manager_capability_config

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability_config_id: str,
  parent: str,
  types: typing.List[str],
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  management_project: str = None,
  timeouts: ResourceManagerCapabilityConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.capabilityConfigId">capability_config_id</a></code> | <code>str</code> | User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.types">types</a></code> | <code>typing.List[str]</code> | The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-defined name for the capability config. Must be between 4 and 30 characters. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.managementProject">management_project</a></code> | <code>str</code> | The management project for the capability config. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capability_config_id`<sup>Required</sup> <a name="capability_config_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.capabilityConfigId"></a>

- *Type:* str

User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#capability_config_id ResourceManagerCapabilityConfigA#capability_config_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.parent"></a>

- *Type:* str

The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#parent ResourceManagerCapabilityConfigA#parent}

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.types"></a>

- *Type:* typing.List[str]

The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#types ResourceManagerCapabilityConfigA#types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#deletion_policy ResourceManagerCapabilityConfigA#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.displayName"></a>

- *Type:* str

User-defined name for the capability config. Must be between 4 and 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#display_name ResourceManagerCapabilityConfigA#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_project`<sup>Optional</sup> <a name="management_project" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.managementProject"></a>

- *Type:* str

The management project for the capability config.

If unspecified, a project will be created automatically.
Must be specified for project-scoped capability config.
Format: 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#management_project ResourceManagerCapabilityConfigA#management_project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#timeouts ResourceManagerCapabilityConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetManagementProject">reset_management_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management_project` <a name="reset_management_project" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetManagementProject"></a>

```python
def reset_management_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct"></a>

```python
from cdktn_provider_google import resource_manager_capability_config

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement"></a>

```python
from cdktn_provider_google import resource_manager_capability_config

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource"></a>

```python
from cdktn_provider_google import resource_manager_capability_config

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_google import resource_manager_capability_config

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceManagerCapabilityConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceManagerCapabilityConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagerCapabilityConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference">ResourceManagerCapabilityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigIdInput">capability_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProjectInput">management_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigId">capability_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProject">management_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeouts"></a>

```python
timeouts: ResourceManagerCapabilityConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference">ResourceManagerCapabilityConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `capability_config_id_input`<sup>Optional</sup> <a name="capability_config_id_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigIdInput"></a>

```python
capability_config_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_project_input`<sup>Optional</sup> <a name="management_project_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProjectInput"></a>

```python
management_project_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ResourceManagerCapabilityConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capability_config_id`<sup>Required</sup> <a name="capability_config_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigId"></a>

```python
capability_config_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_project`<sup>Required</sup> <a name="management_project" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProject"></a>

```python
management_project: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerCapabilityConfigAConfig <a name="ResourceManagerCapabilityConfigAConfig" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.Initializer"></a>

```python
from cdktn_provider_google import resource_manager_capability_config

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability_config_id: str,
  parent: str,
  types: typing.List[str],
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  management_project: str = None,
  timeouts: ResourceManagerCapabilityConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.capabilityConfigId">capability_config_id</a></code> | <code>str</code> | User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.types">types</a></code> | <code>typing.List[str]</code> | The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.displayName">display_name</a></code> | <code>str</code> | User-defined name for the capability config. Must be between 4 and 30 characters. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.managementProject">management_project</a></code> | <code>str</code> | The management project for the capability config. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capability_config_id`<sup>Required</sup> <a name="capability_config_id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.capabilityConfigId"></a>

```python
capability_config_id: str
```

- *Type:* str

User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#capability_config_id ResourceManagerCapabilityConfigA#capability_config_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#parent ResourceManagerCapabilityConfigA#parent}

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#types ResourceManagerCapabilityConfigA#types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#deletion_policy ResourceManagerCapabilityConfigA#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-defined name for the capability config. Must be between 4 and 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#display_name ResourceManagerCapabilityConfigA#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_project`<sup>Optional</sup> <a name="management_project" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.managementProject"></a>

```python
management_project: str
```

- *Type:* str

The management project for the capability config.

If unspecified, a project will be created automatically.
Must be specified for project-scoped capability config.
Format: 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#management_project ResourceManagerCapabilityConfigA#management_project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.timeouts"></a>

```python
timeouts: ResourceManagerCapabilityConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#timeouts ResourceManagerCapabilityConfigA#timeouts}

---

### ResourceManagerCapabilityConfigTimeouts <a name="ResourceManagerCapabilityConfigTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import resource_manager_capability_config

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerCapabilityConfigTimeoutsOutputReference <a name="ResourceManagerCapabilityConfigTimeoutsOutputReference" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import resource_manager_capability_config

resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResourceManagerCapabilityConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---



