# `dataGoogleComputeNetwork` Submodule <a name="`dataGoogleComputeNetwork` Submodule" id="@cdktn/provider-google.dataGoogleComputeNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetwork <a name="DataGoogleComputeNetwork" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network google_compute_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_network

dataGoogleComputeNetwork.DataGoogleComputeNetwork(
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
  network_profile: str = None,
  project: str = None,
  self_link: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#id DataGoogleComputeNetwork#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#name DataGoogleComputeNetwork#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.networkProfile">network_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#network_profile DataGoogleComputeNetwork#network_profile}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#project DataGoogleComputeNetwork#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.selfLink">self_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#self_link DataGoogleComputeNetwork#self_link}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#id DataGoogleComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#name DataGoogleComputeNetwork#name}.

---

##### `network_profile`<sup>Optional</sup> <a name="network_profile" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.networkProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#network_profile DataGoogleComputeNetwork#network_profile}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#project DataGoogleComputeNetwork#project}.

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.Initializer.parameter.selfLink"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#self_link DataGoogleComputeNetwork#self_link}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetNetworkProfile">reset_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetSelfLink">reset_self_link</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_profile` <a name="reset_network_profile" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetNetworkProfile"></a>

```python
def reset_network_profile() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_self_link` <a name="reset_self_link" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.resetSelfLink"></a>

```python
def reset_self_link() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_network

dataGoogleComputeNetwork.DataGoogleComputeNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_network

dataGoogleComputeNetwork.DataGoogleComputeNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_network

dataGoogleComputeNetwork.DataGoogleComputeNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_network

dataGoogleComputeNetwork.DataGoogleComputeNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.gatewayIpv4">gateway_ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.internalIpv6Range">internal_ipv6_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkId">network_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.numericId">numeric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.subnetworksSelfLinks">subnetworks_self_links</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkProfileInput">network_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.selfLinkInput">self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkProfile">network_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateway_ipv4`<sup>Required</sup> <a name="gateway_ipv4" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.gatewayIpv4"></a>

```python
gateway_ipv4: str
```

- *Type:* str

---

##### `internal_ipv6_range`<sup>Required</sup> <a name="internal_ipv6_range" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.internalIpv6Range"></a>

```python
internal_ipv6_range: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkId"></a>

```python
network_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `numeric_id`<sup>Required</sup> <a name="numeric_id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.numericId"></a>

```python
numeric_id: str
```

- *Type:* str

---

##### `subnetworks_self_links`<sup>Required</sup> <a name="subnetworks_self_links" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.subnetworksSelfLinks"></a>

```python
subnetworks_self_links: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_profile_input`<sup>Optional</sup> <a name="network_profile_input" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkProfileInput"></a>

```python
network_profile_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `self_link_input`<sup>Optional</sup> <a name="self_link_input" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.selfLinkInput"></a>

```python
self_link_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.networkProfile"></a>

```python
network_profile: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkConfig <a name="DataGoogleComputeNetworkConfig" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_network

dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  name: str = None,
  network_profile: str = None,
  project: str = None,
  self_link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#id DataGoogleComputeNetwork#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#name DataGoogleComputeNetwork#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.networkProfile">network_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#network_profile DataGoogleComputeNetwork#network_profile}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#project DataGoogleComputeNetwork#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.selfLink">self_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#self_link DataGoogleComputeNetwork#self_link}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#id DataGoogleComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#name DataGoogleComputeNetwork#name}.

---

##### `network_profile`<sup>Optional</sup> <a name="network_profile" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.networkProfile"></a>

```python
network_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#network_profile DataGoogleComputeNetwork#network_profile}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#project DataGoogleComputeNetwork#project}.

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeNetwork.DataGoogleComputeNetworkConfig.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/compute_network#self_link DataGoogleComputeNetwork#self_link}.

---



