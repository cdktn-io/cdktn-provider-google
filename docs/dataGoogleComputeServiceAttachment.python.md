# `dataGoogleComputeServiceAttachment` Submodule <a name="`dataGoogleComputeServiceAttachment` Submodule" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeServiceAttachment <a name="DataGoogleComputeServiceAttachment" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#id DataGoogleComputeServiceAttachment#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#project DataGoogleComputeServiceAttachment#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.region">region</a></code> | <code>str</code> | URL of the region where the resource resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#name DataGoogleComputeServiceAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#id DataGoogleComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#project DataGoogleComputeServiceAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.region"></a>

- *Type:* str

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#region DataGoogleComputeServiceAttachment#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeServiceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeServiceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeServiceAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.connectedEndpoints">connected_endpoints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList">DataGoogleComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.connectionPreference">connection_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.consumerAcceptLists">consumer_accept_lists</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList">DataGoogleComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.consumerRejectLists">consumer_reject_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.enableProxyProtocol">enable_proxy_protocol</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.natSubnets">nat_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.propagatedConnectionLimit">propagated_connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.pscServiceAttachmentId">psc_service_attachment_id</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.reconcileConnections">reconcile_connections</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero">send_propagated_connection_limit_if_zero</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.showNatIps">show_nat_ips</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.targetService">target_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `connected_endpoints`<sup>Required</sup> <a name="connected_endpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.connectedEndpoints"></a>

```python
connected_endpoints: DataGoogleComputeServiceAttachmentConnectedEndpointsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList">DataGoogleComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `connection_preference`<sup>Required</sup> <a name="connection_preference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.connectionPreference"></a>

```python
connection_preference: str
```

- *Type:* str

---

##### `consumer_accept_lists`<sup>Required</sup> <a name="consumer_accept_lists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.consumerAcceptLists"></a>

```python
consumer_accept_lists: DataGoogleComputeServiceAttachmentConsumerAcceptListsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList">DataGoogleComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `consumer_reject_lists`<sup>Required</sup> <a name="consumer_reject_lists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.consumerRejectLists"></a>

```python
consumer_reject_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_proxy_protocol`<sup>Required</sup> <a name="enable_proxy_protocol" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.enableProxyProtocol"></a>

```python
enable_proxy_protocol: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `nat_subnets`<sup>Required</sup> <a name="nat_subnets" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.natSubnets"></a>

```python
nat_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `propagated_connection_limit`<sup>Required</sup> <a name="propagated_connection_limit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.propagatedConnectionLimit"></a>

```python
propagated_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_service_attachment_id`<sup>Required</sup> <a name="psc_service_attachment_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.pscServiceAttachmentId"></a>

```python
psc_service_attachment_id: DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList</a>

---

##### `reconcile_connections`<sup>Required</sup> <a name="reconcile_connections" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.reconcileConnections"></a>

```python
reconcile_connections: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `send_propagated_connection_limit_if_zero`<sup>Required</sup> <a name="send_propagated_connection_limit_if_zero" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero"></a>

```python
send_propagated_connection_limit_if_zero: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `show_nat_ips`<sup>Required</sup> <a name="show_nat_ips" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.showNatIps"></a>

```python
show_nat_ips: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `target_service`<sup>Required</sup> <a name="target_service" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.targetService"></a>

```python
target_service: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeServiceAttachmentConfig <a name="DataGoogleComputeServiceAttachmentConfig" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#id DataGoogleComputeServiceAttachment#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#project DataGoogleComputeServiceAttachment#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.region">region</a></code> | <code>str</code> | URL of the region where the resource resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#name DataGoogleComputeServiceAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#id DataGoogleComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#project DataGoogleComputeServiceAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_service_attachment#region DataGoogleComputeServiceAttachment#region}

---

### DataGoogleComputeServiceAttachmentConnectedEndpoints <a name="DataGoogleComputeServiceAttachmentConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints()
```


### DataGoogleComputeServiceAttachmentConsumerAcceptLists <a name="DataGoogleComputeServiceAttachmentConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists()
```


### DataGoogleComputeServiceAttachmentPscServiceAttachmentId <a name="DataGoogleComputeServiceAttachmentPscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeServiceAttachmentConnectedEndpointsList <a name="DataGoogleComputeServiceAttachmentConnectedEndpointsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference <a name="DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagated_connection_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints">DataGoogleComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `nat_ips`<sup>Required</sup> <a name="nat_ips" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.natIps"></a>

```python
nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `propagated_connection_count`<sup>Required</sup> <a name="propagated_connection_count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```python
propagated_connection_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeServiceAttachmentConnectedEndpoints
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints">DataGoogleComputeServiceAttachmentConnectedEndpoints</a>

---


### DataGoogleComputeServiceAttachmentConsumerAcceptListsList <a name="DataGoogleComputeServiceAttachmentConsumerAcceptListsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">project_id_or_num</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists">DataGoogleComputeServiceAttachmentConsumerAcceptLists</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `project_id_or_num`<sup>Required</sup> <a name="project_id_or_num" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```python
project_id_or_num: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeServiceAttachmentConsumerAcceptLists
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists">DataGoogleComputeServiceAttachmentConsumerAcceptLists</a>

---


### DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList <a name="DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference <a name="DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_service_attachment

dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.high">high</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.low">low</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId">DataGoogleComputeServiceAttachmentPscServiceAttachmentId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.high"></a>

```python
high: str
```

- *Type:* str

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.low"></a>

```python
low: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeServiceAttachmentPscServiceAttachmentId
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId">DataGoogleComputeServiceAttachmentPscServiceAttachmentId</a>

---



