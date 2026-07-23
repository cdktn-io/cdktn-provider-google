# `discoveryEngineSearchEngineIamPolicy` Submodule <a name="`discoveryEngineSearchEngineIamPolicy` Submodule" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineSearchEngineIamPolicy <a name="DiscoveryEngineSearchEngineIamPolicy" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy google_discovery_engine_search_engine_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine_iam_policy

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  engine_id: str,
  policy_data: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#collection_id DiscoveryEngineSearchEngineIamPolicy#collection_id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#engine_id DiscoveryEngineSearchEngineIamPolicy#engine_id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#policy_data DiscoveryEngineSearchEngineIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#id DiscoveryEngineSearchEngineIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#location DiscoveryEngineSearchEngineIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#project DiscoveryEngineSearchEngineIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.collectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#collection_id DiscoveryEngineSearchEngineIamPolicy#collection_id}.

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.engineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#engine_id DiscoveryEngineSearchEngineIamPolicy#engine_id}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#policy_data DiscoveryEngineSearchEngineIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#id DiscoveryEngineSearchEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#location DiscoveryEngineSearchEngineIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#project DiscoveryEngineSearchEngineIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineSearchEngineIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine_iam_policy

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine_iam_policy

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine_iam_policy

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine_iam_policy

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineSearchEngineIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineSearchEngineIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineSearchEngineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineSearchEngineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineSearchEngineIamPolicyConfig <a name="DiscoveryEngineSearchEngineIamPolicyConfig" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine_iam_policy

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  engine_id: str,
  policy_data: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.collectionId">collection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#collection_id DiscoveryEngineSearchEngineIamPolicy#collection_id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.engineId">engine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#engine_id DiscoveryEngineSearchEngineIamPolicy#engine_id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#policy_data DiscoveryEngineSearchEngineIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#id DiscoveryEngineSearchEngineIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#location DiscoveryEngineSearchEngineIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#project DiscoveryEngineSearchEngineIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#collection_id DiscoveryEngineSearchEngineIamPolicy#collection_id}.

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#engine_id DiscoveryEngineSearchEngineIamPolicy#engine_id}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#policy_data DiscoveryEngineSearchEngineIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#id DiscoveryEngineSearchEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#location DiscoveryEngineSearchEngineIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_search_engine_iam_policy#project DiscoveryEngineSearchEngineIamPolicy#project}.

---



