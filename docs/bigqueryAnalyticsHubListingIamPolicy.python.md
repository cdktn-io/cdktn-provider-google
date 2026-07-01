# `bigqueryAnalyticsHubListingIamPolicy` Submodule <a name="`bigqueryAnalyticsHubListingIamPolicy` Submodule" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListingIamPolicy <a name="BigqueryAnalyticsHubListingIamPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy google_bigquery_analytics_hub_listing_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_iam_policy

bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_exchange_id: str,
  listing_id: str,
  policy_data: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#data_exchange_id BigqueryAnalyticsHubListingIamPolicy#data_exchange_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#listing_id BigqueryAnalyticsHubListingIamPolicy#listing_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#policy_data BigqueryAnalyticsHubListingIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#id BigqueryAnalyticsHubListingIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#location BigqueryAnalyticsHubListingIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#project BigqueryAnalyticsHubListingIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#data_exchange_id BigqueryAnalyticsHubListingIamPolicy#data_exchange_id}.

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.listingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#listing_id BigqueryAnalyticsHubListingIamPolicy#listing_id}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#policy_data BigqueryAnalyticsHubListingIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#id BigqueryAnalyticsHubListingIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#location BigqueryAnalyticsHubListingIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#project BigqueryAnalyticsHubListingIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BigqueryAnalyticsHubListingIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isConstruct"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_iam_policy

bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_iam_policy

bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_iam_policy

bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_iam_policy

bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BigqueryAnalyticsHubListingIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryAnalyticsHubListingIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryAnalyticsHubListingIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubListingIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingIamPolicyConfig <a name="BigqueryAnalyticsHubListingIamPolicyConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_iam_policy

bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_exchange_id: str,
  listing_id: str,
  policy_data: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#data_exchange_id BigqueryAnalyticsHubListingIamPolicy#data_exchange_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#listing_id BigqueryAnalyticsHubListingIamPolicy#listing_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#policy_data BigqueryAnalyticsHubListingIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#id BigqueryAnalyticsHubListingIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#location BigqueryAnalyticsHubListingIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#project BigqueryAnalyticsHubListingIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#data_exchange_id BigqueryAnalyticsHubListingIamPolicy#data_exchange_id}.

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#listing_id BigqueryAnalyticsHubListingIamPolicy#listing_id}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#policy_data BigqueryAnalyticsHubListingIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#id BigqueryAnalyticsHubListingIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#location BigqueryAnalyticsHubListingIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingIamPolicy.BigqueryAnalyticsHubListingIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigquery_analytics_hub_listing_iam_policy#project BigqueryAnalyticsHubListingIamPolicy#project}.

---



