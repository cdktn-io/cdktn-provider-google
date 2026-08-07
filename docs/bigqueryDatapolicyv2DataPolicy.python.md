# `bigqueryDatapolicyv2DataPolicy` Submodule <a name="`bigqueryDatapolicyv2DataPolicy` Submodule" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyv2DataPolicy <a name="BigqueryDatapolicyv2DataPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy google_bigquery_datapolicyv2_data_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_policy_id: str,
  data_policy_type: str,
  location: str,
  data_governance_tag: BigqueryDatapolicyv2DataPolicyDataGovernanceTag = None,
  data_masking_policy: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy = None,
  deletion_policy: str = None,
  etag: str = None,
  grantees: typing.List[str] = None,
  id: str = None,
  project: str = None,
  timeouts: BigqueryDatapolicyv2DataPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataPolicyId">data_policy_id</a></code> | <code>str</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataPolicyType">data_policy_type</a></code> | <code>str</code> | Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataGovernanceTag">data_governance_tag</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag">BigqueryDatapolicyv2DataPolicyDataGovernanceTag</a></code> | data_governance_tag block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataMaskingPolicy">data_masking_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.etag">etag</a></code> | <code>str</code> | The etag for this Data Policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.grantees">grantees</a></code> | <code>typing.List[str]</code> | The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#id BigqueryDatapolicyv2DataPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#project BigqueryDatapolicyv2DataPolicy#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_policy_id`<sup>Required</sup> <a name="data_policy_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataPolicyId"></a>

- *Type:* str

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {data_policy_id} in part of the resource
name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#data_policy_id BigqueryDatapolicyv2DataPolicy#data_policy_id}

---

##### `data_policy_type`<sup>Required</sup> <a name="data_policy_type" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataPolicyType"></a>

- *Type:* str

Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#data_policy_type BigqueryDatapolicyv2DataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#location BigqueryDatapolicyv2DataPolicy#location}

---

##### `data_governance_tag`<sup>Optional</sup> <a name="data_governance_tag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataGovernanceTag"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag">BigqueryDatapolicyv2DataPolicyDataGovernanceTag</a>

data_governance_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#data_governance_tag BigqueryDatapolicyv2DataPolicy#data_governance_tag}

---

##### `data_masking_policy`<sup>Optional</sup> <a name="data_masking_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataMaskingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#data_masking_policy BigqueryDatapolicyv2DataPolicy#data_masking_policy}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#deletion_policy BigqueryDatapolicyv2DataPolicy#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.etag"></a>

- *Type:* str

The etag for this Data Policy.

This field is used for UpdateDataPolicy calls. If Data Policy exists, this
field is required and must match the server's etag. It will also be
populated in the response of GetDataPolicy, CreateDataPolicy, and
UpdateDataPolicy calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#etag BigqueryDatapolicyv2DataPolicy#etag}

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.grantees"></a>

- *Type:* typing.List[str]

The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy.

Uses the [IAM V2 principal
syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only
supports principal types users, groups, serviceaccounts, cloudidentity.
This field is supported in V2 Data Policy only. In case of V1 data policies
(i.e. verion = 1 and policy_tag is set), this field is not populated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#grantees BigqueryDatapolicyv2DataPolicy#grantees}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#id BigqueryDatapolicyv2DataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#project BigqueryDatapolicyv2DataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#timeouts BigqueryDatapolicyv2DataPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataGovernanceTag">put_data_governance_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy">put_data_masking_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDataGovernanceTag">reset_data_governance_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDataMaskingPolicy">reset_data_masking_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetGrantees">reset_grantees</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_governance_tag` <a name="put_data_governance_tag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataGovernanceTag"></a>

```python
def put_data_governance_tag(
  key: str = None,
  value: str = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataGovernanceTag.parameter.key"></a>

- *Type:* str

Tag keys are globally unique.

Tag key is expected to be in the namespaced format, for example "parent-id/pii" where "parent-id" is the ID of the parent organization or project resource for this tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#key BigqueryDatapolicyv2DataPolicy#key}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataGovernanceTag.parameter.value"></a>

- *Type:* str

Tag value is expected to be the short name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#value BigqueryDatapolicyv2DataPolicy#value}

---

##### `put_data_masking_policy` <a name="put_data_masking_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy"></a>

```python
def put_data_masking_policy(
  predefined_expression: str = None,
  routine: str = None
) -> None
```

###### `predefined_expression`<sup>Optional</sup> <a name="predefined_expression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy.parameter.predefinedExpression"></a>

- *Type:* str

A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#predefined_expression BigqueryDatapolicyv2DataPolicy#predefined_expression}

---

###### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy.parameter.routine"></a>

- *Type:* str

The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#routine BigqueryDatapolicyv2DataPolicy#routine}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#create BigqueryDatapolicyv2DataPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#delete BigqueryDatapolicyv2DataPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#update BigqueryDatapolicyv2DataPolicy#update}.

---

##### `reset_data_governance_tag` <a name="reset_data_governance_tag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDataGovernanceTag"></a>

```python
def reset_data_governance_tag() -> None
```

##### `reset_data_masking_policy` <a name="reset_data_masking_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDataMaskingPolicy"></a>

```python
def reset_data_masking_policy() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_grantees` <a name="reset_grantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetGrantees"></a>

```python
def reset_grantees() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryDatapolicyv2DataPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryDatapolicyv2DataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyv2DataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataGovernanceTag">data_governance_tag</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference">BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicy">data_masking_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.policyTag">policy_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference">BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataGovernanceTagInput">data_governance_tag_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag">BigqueryDatapolicyv2DataPolicyDataGovernanceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicyInput">data_masking_policy_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyIdInput">data_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyTypeInput">data_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.granteesInput">grantees_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyId">data_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyType">data_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.grantees">grantees</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_governance_tag`<sup>Required</sup> <a name="data_governance_tag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataGovernanceTag"></a>

```python
data_governance_tag: BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference">BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference</a>

---

##### `data_masking_policy`<sup>Required</sup> <a name="data_masking_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicy"></a>

```python
data_masking_policy: BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.policyTag"></a>

```python
policy_tag: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeouts"></a>

```python
timeouts: BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference">BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `data_governance_tag_input`<sup>Optional</sup> <a name="data_governance_tag_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataGovernanceTagInput"></a>

```python
data_governance_tag_input: BigqueryDatapolicyv2DataPolicyDataGovernanceTag
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag">BigqueryDatapolicyv2DataPolicyDataGovernanceTag</a>

---

##### `data_masking_policy_input`<sup>Optional</sup> <a name="data_masking_policy_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicyInput"></a>

```python
data_masking_policy_input: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---

##### `data_policy_id_input`<sup>Optional</sup> <a name="data_policy_id_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyIdInput"></a>

```python
data_policy_id_input: str
```

- *Type:* str

---

##### `data_policy_type_input`<sup>Optional</sup> <a name="data_policy_type_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyTypeInput"></a>

```python
data_policy_type_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `grantees_input`<sup>Optional</sup> <a name="grantees_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.granteesInput"></a>

```python
grantees_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BigqueryDatapolicyv2DataPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

---

##### `data_policy_id`<sup>Required</sup> <a name="data_policy_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyId"></a>

```python
data_policy_id: str
```

- *Type:* str

---

##### `data_policy_type`<sup>Required</sup> <a name="data_policy_type" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.dataPolicyType"></a>

```python
data_policy_type: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `grantees`<sup>Required</sup> <a name="grantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.grantees"></a>

```python
grantees: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyv2DataPolicyConfig <a name="BigqueryDatapolicyv2DataPolicyConfig" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_policy_id: str,
  data_policy_type: str,
  location: str,
  data_governance_tag: BigqueryDatapolicyv2DataPolicyDataGovernanceTag = None,
  data_masking_policy: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy = None,
  deletion_policy: str = None,
  etag: str = None,
  grantees: typing.List[str] = None,
  id: str = None,
  project: str = None,
  timeouts: BigqueryDatapolicyv2DataPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyId">data_policy_id</a></code> | <code>str</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyType">data_policy_type</a></code> | <code>str</code> | Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataGovernanceTag">data_governance_tag</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag">BigqueryDatapolicyv2DataPolicyDataGovernanceTag</a></code> | data_governance_tag block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataMaskingPolicy">data_masking_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.etag">etag</a></code> | <code>str</code> | The etag for this Data Policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.grantees">grantees</a></code> | <code>typing.List[str]</code> | The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#id BigqueryDatapolicyv2DataPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#project BigqueryDatapolicyv2DataPolicy#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_policy_id`<sup>Required</sup> <a name="data_policy_id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyId"></a>

```python
data_policy_id: str
```

- *Type:* str

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {data_policy_id} in part of the resource
name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#data_policy_id BigqueryDatapolicyv2DataPolicy#data_policy_id}

---

##### `data_policy_type`<sup>Required</sup> <a name="data_policy_type" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyType"></a>

```python
data_policy_type: str
```

- *Type:* str

Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#data_policy_type BigqueryDatapolicyv2DataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#location BigqueryDatapolicyv2DataPolicy#location}

---

##### `data_governance_tag`<sup>Optional</sup> <a name="data_governance_tag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataGovernanceTag"></a>

```python
data_governance_tag: BigqueryDatapolicyv2DataPolicyDataGovernanceTag
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag">BigqueryDatapolicyv2DataPolicyDataGovernanceTag</a>

data_governance_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#data_governance_tag BigqueryDatapolicyv2DataPolicy#data_governance_tag}

---

##### `data_masking_policy`<sup>Optional</sup> <a name="data_masking_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.dataMaskingPolicy"></a>

```python
data_masking_policy: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#data_masking_policy BigqueryDatapolicyv2DataPolicy#data_masking_policy}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#deletion_policy BigqueryDatapolicyv2DataPolicy#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

The etag for this Data Policy.

This field is used for UpdateDataPolicy calls. If Data Policy exists, this
field is required and must match the server's etag. It will also be
populated in the response of GetDataPolicy, CreateDataPolicy, and
UpdateDataPolicy calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#etag BigqueryDatapolicyv2DataPolicy#etag}

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.grantees"></a>

```python
grantees: typing.List[str]
```

- *Type:* typing.List[str]

The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy.

Uses the [IAM V2 principal
syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only
supports principal types users, groups, serviceaccounts, cloudidentity.
This field is supported in V2 Data Policy only. In case of V1 data policies
(i.e. verion = 1 and policy_tag is set), this field is not populated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#grantees BigqueryDatapolicyv2DataPolicy#grantees}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#id BigqueryDatapolicyv2DataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#project BigqueryDatapolicyv2DataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyConfig.property.timeouts"></a>

```python
timeouts: BigqueryDatapolicyv2DataPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#timeouts BigqueryDatapolicyv2DataPolicy#timeouts}

---

### BigqueryDatapolicyv2DataPolicyDataGovernanceTag <a name="BigqueryDatapolicyv2DataPolicyDataGovernanceTag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag.Initializer"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag.property.key">key</a></code> | <code>str</code> | Tag keys are globally unique. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag.property.value">value</a></code> | <code>str</code> | Tag value is expected to be the short name. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag.property.key"></a>

```python
key: str
```

- *Type:* str

Tag keys are globally unique.

Tag key is expected to be in the namespaced format, for example "parent-id/pii" where "parent-id" is the ID of the parent organization or project resource for this tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#key BigqueryDatapolicyv2DataPolicy#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag.property.value"></a>

```python
value: str
```

- *Type:* str

Tag value is expected to be the short name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#value BigqueryDatapolicyv2DataPolicy#value}

---

### BigqueryDatapolicyv2DataPolicyDataMaskingPolicy <a name="BigqueryDatapolicyv2DataPolicyDataMaskingPolicy" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.Initializer"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy(
  predefined_expression: str = None,
  routine: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.predefinedExpression">predefined_expression</a></code> | <code>str</code> | A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.routine">routine</a></code> | <code>str</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'. |

---

##### `predefined_expression`<sup>Optional</sup> <a name="predefined_expression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```python
predefined_expression: str
```

- *Type:* str

A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#predefined_expression BigqueryDatapolicyv2DataPolicy#predefined_expression}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.routine"></a>

```python
routine: str
```

- *Type:* str

The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#routine BigqueryDatapolicyv2DataPolicy#routine}

---

### BigqueryDatapolicyv2DataPolicyTimeouts <a name="BigqueryDatapolicyv2DataPolicyTimeouts" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#create BigqueryDatapolicyv2DataPolicy#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#delete BigqueryDatapolicyv2DataPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#update BigqueryDatapolicyv2DataPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#create BigqueryDatapolicyv2DataPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#delete BigqueryDatapolicyv2DataPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/bigquery_datapolicyv2_data_policy#update BigqueryDatapolicyv2DataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference <a name="BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag">BigqueryDatapolicyv2DataPolicyDataGovernanceTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryDatapolicyv2DataPolicyDataGovernanceTag
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataGovernanceTag">BigqueryDatapolicyv2DataPolicyDataGovernanceTag</a>

---


### BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference <a name="BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">reset_predefined_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetRoutine">reset_routine</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_predefined_expression` <a name="reset_predefined_expression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```python
def reset_predefined_expression() -> None
```

##### `reset_routine` <a name="reset_routine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```python
def reset_routine() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">predefined_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routineInput">routine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">predefined_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routine">routine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_expression_input`<sup>Optional</sup> <a name="predefined_expression_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```python
predefined_expression_input: str
```

- *Type:* str

---

##### `routine_input`<sup>Optional</sup> <a name="routine_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```python
routine_input: str
```

- *Type:* str

---

##### `predefined_expression`<sup>Required</sup> <a name="predefined_expression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```python
predefined_expression: str
```

- *Type:* str

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```python
routine: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryDatapolicyv2DataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyDataMaskingPolicy">BigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---


### BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference <a name="BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_datapolicyv2_data_policy

bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BigqueryDatapolicyv2DataPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicy.BigqueryDatapolicyv2DataPolicyTimeouts">BigqueryDatapolicyv2DataPolicyTimeouts</a>

---



