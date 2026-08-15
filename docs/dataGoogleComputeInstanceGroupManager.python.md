# `dataGoogleComputeInstanceGroupManager` Submodule <a name="`dataGoogleComputeInstanceGroupManager` Submodule" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstanceGroupManager <a name="DataGoogleComputeInstanceGroupManager" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager google_compute_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  name: str = None,
  project: str = None,
  self_link: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#id DataGoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance group manager. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.selfLink">self_link</a></code> | <code>str</code> | The URL of the created resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone that instances in this group should be created in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#id DataGoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#name DataGoogleComputeInstanceGroupManager#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#project DataGoogleComputeInstanceGroupManager#project}

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.selfLink"></a>

- *Type:* str

The URL of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#self_link DataGoogleComputeInstanceGroupManager#self_link}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.zone"></a>

- *Type:* str

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#zone DataGoogleComputeInstanceGroupManager#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetSelfLink">reset_self_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_self_link` <a name="reset_self_link" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetSelfLink"></a>

```python
def reset_self_link() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeInstanceGroupManager resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeInstanceGroupManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeInstanceGroupManager to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.allInstancesConfig">all_instances_config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList">DataGoogleComputeInstanceGroupManagerAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.autoHealingPolicies">auto_healing_policies</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList">DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.baseInstanceName">base_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceGroup">instance_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceGroupManagerId">instance_group_manager_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy">instance_lifecycle_policy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.listManagedInstancesResults">list_managed_instances_results</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.namedPort">named_port</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList">DataGoogleComputeInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.resourcePolicies">resource_policies</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList">DataGoogleComputeInstanceGroupManagerResourcePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.standbyPolicy">standby_policy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList">DataGoogleComputeInstanceGroupManagerStandbyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulDisk">stateful_disk</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList">DataGoogleComputeInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulExternalIp">stateful_external_ip</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList">DataGoogleComputeInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulInternalIp">stateful_internal_ip</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList">DataGoogleComputeInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.status">status</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList">DataGoogleComputeInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetPools">target_pools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSize">target_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSizePolicy">target_size_policy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList">DataGoogleComputeInstanceGroupManagerTargetSizePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetStoppedSize">target_stopped_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSuspendedSize">target_suspended_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList">DataGoogleComputeInstanceGroupManagerUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.version">version</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList">DataGoogleComputeInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.waitForInstances">wait_for_instances</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.waitForInstancesStatus">wait_for_instances_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.selfLinkInput">self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `all_instances_config`<sup>Required</sup> <a name="all_instances_config" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.allInstancesConfig"></a>

```python
all_instances_config: DataGoogleComputeInstanceGroupManagerAllInstancesConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList">DataGoogleComputeInstanceGroupManagerAllInstancesConfigList</a>

---

##### `auto_healing_policies`<sup>Required</sup> <a name="auto_healing_policies" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.autoHealingPolicies"></a>

```python
auto_healing_policies: DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList">DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList</a>

---

##### `base_instance_name`<sup>Required</sup> <a name="base_instance_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.baseInstanceName"></a>

```python
base_instance_name: str
```

- *Type:* str

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `instance_group`<sup>Required</sup> <a name="instance_group" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceGroup"></a>

```python
instance_group: str
```

- *Type:* str

---

##### `instance_group_manager_id`<sup>Required</sup> <a name="instance_group_manager_id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceGroupManagerId"></a>

```python
instance_group_manager_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_lifecycle_policy`<sup>Required</sup> <a name="instance_lifecycle_policy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```python
instance_lifecycle_policy: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList</a>

---

##### `list_managed_instances_results`<sup>Required</sup> <a name="list_managed_instances_results" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.listManagedInstancesResults"></a>

```python
list_managed_instances_results: str
```

- *Type:* str

---

##### `named_port`<sup>Required</sup> <a name="named_port" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.namedPort"></a>

```python
named_port: DataGoogleComputeInstanceGroupManagerNamedPortList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList">DataGoogleComputeInstanceGroupManagerNamedPortList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.resourcePolicies"></a>

```python
resource_policies: DataGoogleComputeInstanceGroupManagerResourcePoliciesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList">DataGoogleComputeInstanceGroupManagerResourcePoliciesList</a>

---

##### `standby_policy`<sup>Required</sup> <a name="standby_policy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.standbyPolicy"></a>

```python
standby_policy: DataGoogleComputeInstanceGroupManagerStandbyPolicyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList">DataGoogleComputeInstanceGroupManagerStandbyPolicyList</a>

---

##### `stateful_disk`<sup>Required</sup> <a name="stateful_disk" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulDisk"></a>

```python
stateful_disk: DataGoogleComputeInstanceGroupManagerStatefulDiskList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList">DataGoogleComputeInstanceGroupManagerStatefulDiskList</a>

---

##### `stateful_external_ip`<sup>Required</sup> <a name="stateful_external_ip" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulExternalIp"></a>

```python
stateful_external_ip: DataGoogleComputeInstanceGroupManagerStatefulExternalIpList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList">DataGoogleComputeInstanceGroupManagerStatefulExternalIpList</a>

---

##### `stateful_internal_ip`<sup>Required</sup> <a name="stateful_internal_ip" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulInternalIp"></a>

```python
stateful_internal_ip: DataGoogleComputeInstanceGroupManagerStatefulInternalIpList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList">DataGoogleComputeInstanceGroupManagerStatefulInternalIpList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.status"></a>

```python
status: DataGoogleComputeInstanceGroupManagerStatusList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList">DataGoogleComputeInstanceGroupManagerStatusList</a>

---

##### `target_pools`<sup>Required</sup> <a name="target_pools" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetPools"></a>

```python
target_pools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_size`<sup>Required</sup> <a name="target_size" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSize"></a>

```python
target_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_size_policy`<sup>Required</sup> <a name="target_size_policy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSizePolicy"></a>

```python
target_size_policy: DataGoogleComputeInstanceGroupManagerTargetSizePolicyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList">DataGoogleComputeInstanceGroupManagerTargetSizePolicyList</a>

---

##### `target_stopped_size`<sup>Required</sup> <a name="target_stopped_size" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetStoppedSize"></a>

```python
target_stopped_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_suspended_size`<sup>Required</sup> <a name="target_suspended_size" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSuspendedSize"></a>

```python
target_suspended_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.updatePolicy"></a>

```python
update_policy: DataGoogleComputeInstanceGroupManagerUpdatePolicyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList">DataGoogleComputeInstanceGroupManagerUpdatePolicyList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.version"></a>

```python
version: DataGoogleComputeInstanceGroupManagerVersionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList">DataGoogleComputeInstanceGroupManagerVersionList</a>

---

##### `wait_for_instances`<sup>Required</sup> <a name="wait_for_instances" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.waitForInstances"></a>

```python
wait_for_instances: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `wait_for_instances_status`<sup>Required</sup> <a name="wait_for_instances_status" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.waitForInstancesStatus"></a>

```python
wait_for_instances_status: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `self_link_input`<sup>Optional</sup> <a name="self_link_input" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.selfLinkInput"></a>

```python
self_link_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceGroupManagerAllInstancesConfig <a name="DataGoogleComputeInstanceGroupManagerAllInstancesConfig" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig()
```


### DataGoogleComputeInstanceGroupManagerAutoHealingPolicies <a name="DataGoogleComputeInstanceGroupManagerAutoHealingPolicies" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies()
```


### DataGoogleComputeInstanceGroupManagerConfig <a name="DataGoogleComputeInstanceGroupManagerConfig" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  name: str = None,
  project: str = None,
  self_link: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#id DataGoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.name">name</a></code> | <code>str</code> | The name of the instance group manager. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.selfLink">self_link</a></code> | <code>str</code> | The URL of the created resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.zone">zone</a></code> | <code>str</code> | The zone that instances in this group should be created in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#id DataGoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#name DataGoogleComputeInstanceGroupManager#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#project DataGoogleComputeInstanceGroupManager#project}

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

The URL of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#self_link DataGoogleComputeInstanceGroupManager#self_link}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_instance_group_manager#zone DataGoogleComputeInstanceGroupManager#zone}

---

### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy()
```


### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair()
```


### DataGoogleComputeInstanceGroupManagerNamedPort <a name="DataGoogleComputeInstanceGroupManagerNamedPort" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort()
```


### DataGoogleComputeInstanceGroupManagerResourcePolicies <a name="DataGoogleComputeInstanceGroupManagerResourcePolicies" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies()
```


### DataGoogleComputeInstanceGroupManagerStandbyPolicy <a name="DataGoogleComputeInstanceGroupManagerStandbyPolicy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy()
```


### DataGoogleComputeInstanceGroupManagerStatefulDisk <a name="DataGoogleComputeInstanceGroupManagerStatefulDisk" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk()
```


### DataGoogleComputeInstanceGroupManagerStatefulExternalIp <a name="DataGoogleComputeInstanceGroupManagerStatefulExternalIp" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp()
```


### DataGoogleComputeInstanceGroupManagerStatefulInternalIp <a name="DataGoogleComputeInstanceGroupManagerStatefulInternalIp" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp()
```


### DataGoogleComputeInstanceGroupManagerStatus <a name="DataGoogleComputeInstanceGroupManagerStatus" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus()
```


### DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig <a name="DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig()
```


### DataGoogleComputeInstanceGroupManagerStatusStateful <a name="DataGoogleComputeInstanceGroupManagerStatusStateful" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful()
```


### DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs()
```


### DataGoogleComputeInstanceGroupManagerStatusVersionTarget <a name="DataGoogleComputeInstanceGroupManagerStatusVersionTarget" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget()
```


### DataGoogleComputeInstanceGroupManagerTargetSizePolicy <a name="DataGoogleComputeInstanceGroupManagerTargetSizePolicy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicy.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicy()
```


### DataGoogleComputeInstanceGroupManagerUpdatePolicy <a name="DataGoogleComputeInstanceGroupManagerUpdatePolicy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy()
```


### DataGoogleComputeInstanceGroupManagerVersion <a name="DataGoogleComputeInstanceGroupManagerVersion" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion()
```


### DataGoogleComputeInstanceGroupManagerVersionTargetSize <a name="DataGoogleComputeInstanceGroupManagerVersionTargetSize" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceGroupManagerAllInstancesConfigList <a name="DataGoogleComputeInstanceGroupManagerAllInstancesConfigList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference <a name="DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig">DataGoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerAllInstancesConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig">DataGoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---


### DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList <a name="DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">initial_delay_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies">DataGoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

---

##### `initial_delay_sec`<sup>Required</sup> <a name="initial_delay_sec" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```python
initial_delay_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies">DataGoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---


### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZone">allow_changing_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_changing_zone`<sup>Required</sup> <a name="allow_changing_zone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZone"></a>

```python
allow_changing_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a>

---


### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">default_action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">force_update_on_repair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheck">on_failed_health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepair">on_repair</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_action_on_failure`<sup>Required</sup> <a name="default_action_on_failure" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```python
default_action_on_failure: str
```

- *Type:* str

---

##### `force_update_on_repair`<sup>Required</sup> <a name="force_update_on_repair" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```python
force_update_on_repair: str
```

- *Type:* str

---

##### `on_failed_health_check`<sup>Required</sup> <a name="on_failed_health_check" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheck"></a>

```python
on_failed_health_check: str
```

- *Type:* str

---

##### `on_repair`<sup>Required</sup> <a name="on_repair" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepair"></a>

```python
on_repair: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOnRepairList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### DataGoogleComputeInstanceGroupManagerNamedPortList <a name="DataGoogleComputeInstanceGroupManagerNamedPortList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerNamedPortOutputReference <a name="DataGoogleComputeInstanceGroupManagerNamedPortOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort">DataGoogleComputeInstanceGroupManagerNamedPort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerNamedPort
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort">DataGoogleComputeInstanceGroupManagerNamedPort</a>

---


### DataGoogleComputeInstanceGroupManagerResourcePoliciesList <a name="DataGoogleComputeInstanceGroupManagerResourcePoliciesList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference <a name="DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy">workload_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies">DataGoogleComputeInstanceGroupManagerResourcePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workload_policy`<sup>Required</sup> <a name="workload_policy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy"></a>

```python
workload_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerResourcePolicies
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies">DataGoogleComputeInstanceGroupManagerResourcePolicies</a>

---


### DataGoogleComputeInstanceGroupManagerStandbyPolicyList <a name="DataGoogleComputeInstanceGroupManagerStandbyPolicyList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference <a name="DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">initial_delay_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy">DataGoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_delay_sec`<sup>Required</sup> <a name="initial_delay_sec" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```python
initial_delay_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStandbyPolicy
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy">DataGoogleComputeInstanceGroupManagerStandbyPolicy</a>

---


### DataGoogleComputeInstanceGroupManagerStatefulDiskList <a name="DataGoogleComputeInstanceGroupManagerStatefulDiskList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk">DataGoogleComputeInstanceGroupManagerStatefulDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStatefulDisk
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk">DataGoogleComputeInstanceGroupManagerStatefulDisk</a>

---


### DataGoogleComputeInstanceGroupManagerStatefulExternalIpList <a name="DataGoogleComputeInstanceGroupManagerStatefulExternalIpList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp">DataGoogleComputeInstanceGroupManagerStatefulExternalIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStatefulExternalIp
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp">DataGoogleComputeInstanceGroupManagerStatefulExternalIp</a>

---


### DataGoogleComputeInstanceGroupManagerStatefulInternalIpList <a name="DataGoogleComputeInstanceGroupManagerStatefulInternalIpList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp">DataGoogleComputeInstanceGroupManagerStatefulInternalIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStatefulInternalIp
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp">DataGoogleComputeInstanceGroupManagerStatefulInternalIp</a>

---


### DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList <a name="DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">current_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">effective</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig">DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_revision`<sup>Required</sup> <a name="current_revision" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```python
current_revision: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```python
effective: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig">DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a>

---


### DataGoogleComputeInstanceGroupManagerStatusList <a name="DataGoogleComputeInstanceGroupManagerStatusList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStatusOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">all_instances_config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable">is_stable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful">stateful</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList">DataGoogleComputeInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget">version_target</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList">DataGoogleComputeInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus">DataGoogleComputeInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_instances_config`<sup>Required</sup> <a name="all_instances_config" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```python
all_instances_config: DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `is_stable`<sup>Required</sup> <a name="is_stable" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```python
is_stable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```python
stateful: DataGoogleComputeInstanceGroupManagerStatusStatefulList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList">DataGoogleComputeInstanceGroupManagerStatusStatefulList</a>

---

##### `version_target`<sup>Required</sup> <a name="version_target" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```python
version_target: DataGoogleComputeInstanceGroupManagerStatusVersionTargetList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList">DataGoogleComputeInstanceGroupManagerStatusVersionTargetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStatus
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus">DataGoogleComputeInstanceGroupManagerStatus</a>

---


### DataGoogleComputeInstanceGroupManagerStatusStatefulList <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">has_stateful_config</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">per_instance_configs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful">DataGoogleComputeInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `has_stateful_config`<sup>Required</sup> <a name="has_stateful_config" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```python
has_stateful_config: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `per_instance_configs`<sup>Required</sup> <a name="per_instance_configs" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```python
per_instance_configs: DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStatusStateful
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful">DataGoogleComputeInstanceGroupManagerStatusStateful</a>

---


### DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">all_effective</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_effective`<sup>Required</sup> <a name="all_effective" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```python
all_effective: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### DataGoogleComputeInstanceGroupManagerStatusVersionTargetList <a name="DataGoogleComputeInstanceGroupManagerStatusVersionTargetList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">is_reached</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget">DataGoogleComputeInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_reached`<sup>Required</sup> <a name="is_reached" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```python
is_reached: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerStatusVersionTarget
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget">DataGoogleComputeInstanceGroupManagerStatusVersionTarget</a>

---


### DataGoogleComputeInstanceGroupManagerTargetSizePolicyList <a name="DataGoogleComputeInstanceGroupManagerTargetSizePolicyList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference <a name="DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicy">DataGoogleComputeInstanceGroupManagerTargetSizePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerTargetSizePolicy
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerTargetSizePolicy">DataGoogleComputeInstanceGroupManagerTargetSizePolicy</a>

---


### DataGoogleComputeInstanceGroupManagerUpdatePolicyList <a name="DataGoogleComputeInstanceGroupManagerUpdatePolicyList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference <a name="DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">max_surge_fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">max_surge_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">max_unavailable_fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">max_unavailable_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">minimal_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">replacement_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy">DataGoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_surge_fixed`<sup>Required</sup> <a name="max_surge_fixed" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```python
max_surge_fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_surge_percent`<sup>Required</sup> <a name="max_surge_percent" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```python
max_surge_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_fixed`<sup>Required</sup> <a name="max_unavailable_fixed" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```python
max_unavailable_fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_percent`<sup>Required</sup> <a name="max_unavailable_percent" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```python
max_unavailable_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimal_action`<sup>Required</sup> <a name="minimal_action" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```python
minimal_action: str
```

- *Type:* str

---

##### `most_disruptive_allowed_action`<sup>Required</sup> <a name="most_disruptive_allowed_action" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```python
most_disruptive_allowed_action: str
```

- *Type:* str

---

##### `replacement_method`<sup>Required</sup> <a name="replacement_method" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```python
replacement_method: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy">DataGoogleComputeInstanceGroupManagerUpdatePolicy</a>

---


### DataGoogleComputeInstanceGroupManagerVersionList <a name="DataGoogleComputeInstanceGroupManagerVersionList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerVersionOutputReference <a name="DataGoogleComputeInstanceGroupManagerVersionOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate">instance_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize">target_size</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList">DataGoogleComputeInstanceGroupManagerVersionTargetSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion">DataGoogleComputeInstanceGroupManagerVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_template`<sup>Required</sup> <a name="instance_template" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```python
instance_template: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_size`<sup>Required</sup> <a name="target_size" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```python
target_size: DataGoogleComputeInstanceGroupManagerVersionTargetSizeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList">DataGoogleComputeInstanceGroupManagerVersionTargetSizeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerVersion
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion">DataGoogleComputeInstanceGroupManagerVersion</a>

---


### DataGoogleComputeInstanceGroupManagerVersionTargetSizeList <a name="DataGoogleComputeInstanceGroupManagerVersionTargetSizeList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference <a name="DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_instance_group_manager

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize">DataGoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```python
fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize">DataGoogleComputeInstanceGroupManagerVersionTargetSize</a>

---



