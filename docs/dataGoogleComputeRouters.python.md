# `dataGoogleComputeRouters` Submodule <a name="`dataGoogleComputeRouters` Submodule" id="@cdktn/provider-google.dataGoogleComputeRouters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRouters <a name="DataGoogleComputeRouters" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers google_compute_routers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRouters(
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
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeRouters resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRouters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRouters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRouters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRouters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeRouters resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeRouters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeRouters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRouters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.routers">routers</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList">DataGoogleComputeRoutersRoutersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `routers`<sup>Required</sup> <a name="routers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.routers"></a>

```python
routers: DataGoogleComputeRoutersRoutersList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList">DataGoogleComputeRoutersRoutersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRoutersConfig <a name="DataGoogleComputeRoutersConfig" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}.

---

### DataGoogleComputeRoutersRouters <a name="DataGoogleComputeRoutersRouters" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRouters()
```


### DataGoogleComputeRoutersRoutersBgp <a name="DataGoogleComputeRoutersRoutersBgp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp()
```


### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges()
```


### DataGoogleComputeRoutersRoutersBgpPeers <a name="DataGoogleComputeRoutersRoutersBgpPeers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers()
```


### DataGoogleComputeRoutersRoutersInterfaces <a name="DataGoogleComputeRoutersRoutersInterfaces" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces()
```


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeys <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeys" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys()
```


### DataGoogleComputeRoutersRoutersNats <a name="DataGoogleComputeRoutersRoutersNats" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges</a>

---


### DataGoogleComputeRoutersRoutersBgpList <a name="DataGoogleComputeRoutersRoutersBgpList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRoutersRoutersBgpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRoutersRoutersBgpOutputReference <a name="DataGoogleComputeRoutersRoutersBgpOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedGroups">advertised_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedIpRanges">advertised_ip_ranges</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertiseMode">advertise_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.keepaliveInterval">keepalive_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp">DataGoogleComputeRoutersRoutersBgp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advertised_groups`<sup>Required</sup> <a name="advertised_groups" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedGroups"></a>

```python
advertised_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advertised_ip_ranges`<sup>Required</sup> <a name="advertised_ip_ranges" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedIpRanges"></a>

```python
advertised_ip_ranges: DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList</a>

---

##### `advertise_mode`<sup>Required</sup> <a name="advertise_mode" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertiseMode"></a>

```python
advertise_mode: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keepalive_interval`<sup>Required</sup> <a name="keepalive_interval" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.keepaliveInterval"></a>

```python
keepalive_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRoutersRoutersBgp
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp">DataGoogleComputeRoutersRoutersBgp</a>

---


### DataGoogleComputeRoutersRoutersBgpPeersList <a name="DataGoogleComputeRoutersRoutersBgpPeersList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRoutersRoutersBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRoutersRoutersBgpPeersOutputReference <a name="DataGoogleComputeRoutersRoutersBgpPeersOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertisedRoutePriority">advertised_route_priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertiseMode">advertise_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enable">enable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enableIpv6">enable_ipv6</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.managementType">management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerIpAddress">peer_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers">DataGoogleComputeRoutersRoutersBgpPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advertised_route_priority`<sup>Required</sup> <a name="advertised_route_priority" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertisedRoutePriority"></a>

```python
advertised_route_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `advertise_mode`<sup>Required</sup> <a name="advertise_mode" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertiseMode"></a>

```python
advertise_mode: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enable"></a>

```python
enable: str
```

- *Type:* str

---

##### `enable_ipv6`<sup>Required</sup> <a name="enable_ipv6" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enableIpv6"></a>

```python
enable_ipv6: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `management_type`<sup>Required</sup> <a name="management_type" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.managementType"></a>

```python
management_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_ip_address`<sup>Required</sup> <a name="peer_ip_address" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerIpAddress"></a>

```python
peer_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRoutersRoutersBgpPeers
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers">DataGoogleComputeRoutersRoutersBgpPeers</a>

---


### DataGoogleComputeRoutersRoutersInterfacesList <a name="DataGoogleComputeRoutersRoutersInterfacesList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRoutersRoutersInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRoutersRoutersInterfacesOutputReference <a name="DataGoogleComputeRoutersRoutersInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedInterconnectAttachment">linked_interconnect_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedVpnTunnel">linked_vpn_tunnel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.redundantInterface">redundant_interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces">DataGoogleComputeRoutersRoutersInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `linked_interconnect_attachment`<sup>Required</sup> <a name="linked_interconnect_attachment" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedInterconnectAttachment"></a>

```python
linked_interconnect_attachment: str
```

- *Type:* str

---

##### `linked_vpn_tunnel`<sup>Required</sup> <a name="linked_vpn_tunnel" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedVpnTunnel"></a>

```python
linked_vpn_tunnel: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `redundant_interface`<sup>Required</sup> <a name="redundant_interface" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.redundantInterface"></a>

```python
redundant_interface: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRoutersRoutersInterfaces
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces">DataGoogleComputeRoutersRoutersInterfaces</a>

---


### DataGoogleComputeRoutersRoutersList <a name="DataGoogleComputeRoutersRoutersList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRoutersRoutersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys">DataGoogleComputeRoutersRoutersMd5AuthenticationKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRoutersRoutersMd5AuthenticationKeys
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys">DataGoogleComputeRoutersRoutersMd5AuthenticationKeys</a>

---


### DataGoogleComputeRoutersRoutersNatsList <a name="DataGoogleComputeRoutersRoutersNatsList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRoutersRoutersNatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRoutersRoutersNatsOutputReference <a name="DataGoogleComputeRoutersRoutersNatsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.enableEndpointIndependentMapping">enable_endpoint_independent_mapping</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.icmpIdleTimeoutSec">icmp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.minPortsPerVm">min_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIpAllocateOption">nat_ip_allocate_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.sourceSubnetworkIpRangesToNat">source_subnetwork_ip_ranges_to_nat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpEstablishedIdleTimeoutSec">tcp_established_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpTransitoryIdleTimeoutSec">tcp_transitory_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.udpIdleTimeoutSec">udp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats">DataGoogleComputeRoutersRoutersNats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_endpoint_independent_mapping`<sup>Required</sup> <a name="enable_endpoint_independent_mapping" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.enableEndpointIndependentMapping"></a>

```python
enable_endpoint_independent_mapping: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `icmp_idle_timeout_sec`<sup>Required</sup> <a name="icmp_idle_timeout_sec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.icmpIdleTimeoutSec"></a>

```python
icmp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ports_per_vm`<sup>Required</sup> <a name="min_ports_per_vm" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.minPortsPerVm"></a>

```python
min_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nat_ip_allocate_option`<sup>Required</sup> <a name="nat_ip_allocate_option" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIpAllocateOption"></a>

```python
nat_ip_allocate_option: str
```

- *Type:* str

---

##### `nat_ips`<sup>Required</sup> <a name="nat_ips" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIps"></a>

```python
nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_subnetwork_ip_ranges_to_nat`<sup>Required</sup> <a name="source_subnetwork_ip_ranges_to_nat" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.sourceSubnetworkIpRangesToNat"></a>

```python
source_subnetwork_ip_ranges_to_nat: str
```

- *Type:* str

---

##### `tcp_established_idle_timeout_sec`<sup>Required</sup> <a name="tcp_established_idle_timeout_sec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpEstablishedIdleTimeoutSec"></a>

```python
tcp_established_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_transitory_idle_timeout_sec`<sup>Required</sup> <a name="tcp_transitory_idle_timeout_sec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpTransitoryIdleTimeoutSec"></a>

```python
tcp_transitory_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_idle_timeout_sec`<sup>Required</sup> <a name="udp_idle_timeout_sec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.udpIdleTimeoutSec"></a>

```python
udp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRoutersRoutersNats
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats">DataGoogleComputeRoutersRoutersNats</a>

---


### DataGoogleComputeRoutersRoutersOutputReference <a name="DataGoogleComputeRoutersRoutersOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_routers

dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList">DataGoogleComputeRoutersRoutersBgpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgpPeers">bgp_peers</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList">DataGoogleComputeRoutersRoutersBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.encryptedInterconnectRouter">encrypted_interconnect_router</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList">DataGoogleComputeRoutersRoutersInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.md5AuthenticationKeys">md5_authentication_keys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList">DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.nats">nats</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList">DataGoogleComputeRoutersRoutersNatsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters">DataGoogleComputeRoutersRouters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgp"></a>

```python
bgp: DataGoogleComputeRoutersRoutersBgpList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList">DataGoogleComputeRoutersRoutersBgpList</a>

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgpPeers"></a>

```python
bgp_peers: DataGoogleComputeRoutersRoutersBgpPeersList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList">DataGoogleComputeRoutersRoutersBgpPeersList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encrypted_interconnect_router`<sup>Required</sup> <a name="encrypted_interconnect_router" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.encryptedInterconnectRouter"></a>

```python
encrypted_interconnect_router: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.interfaces"></a>

```python
interfaces: DataGoogleComputeRoutersRoutersInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList">DataGoogleComputeRoutersRoutersInterfacesList</a>

---

##### `md5_authentication_keys`<sup>Required</sup> <a name="md5_authentication_keys" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.md5AuthenticationKeys"></a>

```python
md5_authentication_keys: DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList">DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nats`<sup>Required</sup> <a name="nats" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.nats"></a>

```python
nats: DataGoogleComputeRoutersRoutersNatsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList">DataGoogleComputeRoutersRoutersNatsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRoutersRouters
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters">DataGoogleComputeRoutersRouters</a>

---



