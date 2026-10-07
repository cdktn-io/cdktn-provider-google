# `dataGoogleComputeServiceAttachments` Submodule <a name="`dataGoogleComputeServiceAttachments` Submodule" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeServiceAttachments <a name="DataGoogleComputeServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments google_compute_service_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeServiceAttachments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeServiceAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeServiceAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments">service_attachments</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `service_attachments`<sup>Required</sup> <a name="service_attachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments"></a>

```python
service_attachments: DataGoogleComputeServiceAttachmentsServiceAttachmentsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeServiceAttachmentsConfig <a name="DataGoogleComputeServiceAttachmentsConfig" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}.

---

### DataGoogleComputeServiceAttachmentsServiceAttachments <a name="DataGoogleComputeServiceAttachmentsServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments()
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints()
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists()
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagated_connection_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `nat_ips`<sup>Required</sup> <a name="nat_ips" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps"></a>

```python
nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `propagated_connection_count`<sup>Required</sup> <a name="propagated_connection_count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```python
propagated_connection_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum">project_id_or_num</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `project_id_or_num`<sup>Required</sup> <a name="project_id_or_num" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```python
project_id_or_num: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints">connected_endpoints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference">connection_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists">consumer_accept_lists</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists">consumer_reject_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol">enable_proxy_protocol</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint">nat_ips_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets">nat_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit">propagated_connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId">psc_service_attachment_id</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections">reconcile_connections</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero">send_propagated_connection_limit_if_zero</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps">show_nat_ips</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService">target_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connected_endpoints`<sup>Required</sup> <a name="connected_endpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints"></a>

```python
connected_endpoints: DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a>

---

##### `connection_preference`<sup>Required</sup> <a name="connection_preference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference"></a>

```python
connection_preference: str
```

- *Type:* str

---

##### `consumer_accept_lists`<sup>Required</sup> <a name="consumer_accept_lists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists"></a>

```python
consumer_accept_lists: DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a>

---

##### `consumer_reject_lists`<sup>Required</sup> <a name="consumer_reject_lists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists"></a>

```python
consumer_reject_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_proxy_protocol`<sup>Required</sup> <a name="enable_proxy_protocol" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol"></a>

```python
enable_proxy_protocol: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nat_ips_per_endpoint`<sup>Required</sup> <a name="nat_ips_per_endpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint"></a>

```python
nat_ips_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nat_subnets`<sup>Required</sup> <a name="nat_subnets" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets"></a>

```python
nat_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `propagated_connection_limit`<sup>Required</sup> <a name="propagated_connection_limit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit"></a>

```python
propagated_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_service_attachment_id`<sup>Required</sup> <a name="psc_service_attachment_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId"></a>

```python
psc_service_attachment_id: DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a>

---

##### `reconcile_connections`<sup>Required</sup> <a name="reconcile_connections" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections"></a>

```python
reconcile_connections: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `send_propagated_connection_limit_if_zero`<sup>Required</sup> <a name="send_propagated_connection_limit_if_zero" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero"></a>

```python
send_propagated_connection_limit_if_zero: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `show_nat_ips`<sup>Required</sup> <a name="show_nat_ips" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps"></a>

```python
show_nat_ips: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `target_service`<sup>Required</sup> <a name="target_service" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService"></a>

```python
target_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeServiceAttachmentsServiceAttachments
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachments

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high">high</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low">low</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high"></a>

```python
high: str
```

- *Type:* str

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low"></a>

```python
low: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a>

---



