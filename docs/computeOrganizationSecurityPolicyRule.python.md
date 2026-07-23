# `computeOrganizationSecurityPolicyRule` Submodule <a name="`computeOrganizationSecurityPolicyRule` Submodule" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrganizationSecurityPolicyRule <a name="ComputeOrganizationSecurityPolicyRule" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule google_compute_organization_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  match: ComputeOrganizationSecurityPolicyRuleMatch,
  policy_id: str,
  priority: typing.Union[int, float],
  deletion_policy: str = None,
  description: str = None,
  header_action: ComputeOrganizationSecurityPolicyRuleHeaderAction = None,
  id: str = None,
  preconfigured_waf_config: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig = None,
  preview: bool | IResolvable = None,
  redirect_options: ComputeOrganizationSecurityPolicyRuleRedirectOptions = None,
  timeouts: ComputeOrganizationSecurityPolicyRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | The ID of the OrganizationSecurityPolicy this rule applies to. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.headerAction">header_action</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.preview">preview</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.redirectOptions">redirect_options</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.action"></a>

- *Type:* str

The Action to perform when the client connection triggers the rule.

Valid actions are:
"allow": allow access to target.
"deny": deny access to target.
"goto_next": forward the request to the next hierarchical policy for evaluation.
"redirect": redirect to a different target. Parameters for this action can be configured via redirectOptions. Only EXTERNAL_302 redirect type is supported for organization security policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#action ComputeOrganizationSecurityPolicyRule#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#match ComputeOrganizationSecurityPolicyRule#match}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* str

The ID of the OrganizationSecurityPolicy this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#policy_id ComputeOrganizationSecurityPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#priority ComputeOrganizationSecurityPolicyRule#priority}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#deletion_policy ComputeOrganizationSecurityPolicyRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.description"></a>

- *Type:* str

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}

---

##### `header_action`<sup>Optional</sup> <a name="header_action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.headerAction"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#header_action ComputeOrganizationSecurityPolicyRule#header_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preconfigured_waf_config`<sup>Optional</sup> <a name="preconfigured_waf_config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.preconfiguredWafConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#preconfigured_waf_config ComputeOrganizationSecurityPolicyRule#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.preview"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#preview ComputeOrganizationSecurityPolicyRule#preview}

---

##### `redirect_options`<sup>Optional</sup> <a name="redirect_options" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.redirectOptions"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#redirect_options ComputeOrganizationSecurityPolicyRule#redirect_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#timeouts ComputeOrganizationSecurityPolicyRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction">put_header_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig">put_preconfigured_waf_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions">put_redirect_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetHeaderAction">reset_header_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreconfiguredWafConfig">reset_preconfigured_waf_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreview">reset_preview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetRedirectOptions">reset_redirect_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_header_action` <a name="put_header_action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction"></a>

```python
def put_header_action(
  request_headers_to_adds: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds] = None
) -> None
```

###### `request_headers_to_adds`<sup>Optional</sup> <a name="request_headers_to_adds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putHeaderAction.parameter.requestHeadersToAdds"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_headers_to_adds ComputeOrganizationSecurityPolicyRule#request_headers_to_adds}

---

##### `put_match` <a name="put_match" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch"></a>

```python
def put_match(
  config: ComputeOrganizationSecurityPolicyRuleMatchConfig = None,
  description: str = None,
  expr: ComputeOrganizationSecurityPolicyRuleMatchExpr = None,
  versioned_expr: str = None
) -> None
```

###### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#config ComputeOrganizationSecurityPolicyRule#config}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch.parameter.description"></a>

- *Type:* str

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}

---

###### `expr`<sup>Optional</sup> <a name="expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch.parameter.expr"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#expr ComputeOrganizationSecurityPolicyRule#expr}

---

###### `versioned_expr`<sup>Optional</sup> <a name="versioned_expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putMatch.parameter.versionedExpr"></a>

- *Type:* str

Preconfigured versioned expression.

For organization security policy rules,
the only supported type is "SRC_IPS_V1".
**NOTE** : 'FIREWALL' type is deprecated. Please use 'google_compute_firewall_policy_rule' resource instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#versioned_expr ComputeOrganizationSecurityPolicyRule#versioned_expr}

---

##### `put_preconfigured_waf_config` <a name="put_preconfigured_waf_config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig"></a>

```python
def put_preconfigured_waf_config(
  exclusion: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion] = None
) -> None
```

###### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig.parameter.exclusion"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#exclusion ComputeOrganizationSecurityPolicyRule#exclusion}

---

##### `put_redirect_options` <a name="put_redirect_options" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions"></a>

```python
def put_redirect_options(
  type: str,
  target: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions.parameter.type"></a>

- *Type:* str

Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#type ComputeOrganizationSecurityPolicyRule#type}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putRedirectOptions.parameter.target"></a>

- *Type:* str

Target for the redirect action. This is required if the type is EXTERNAL_302.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#target ComputeOrganizationSecurityPolicyRule#target}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#create ComputeOrganizationSecurityPolicyRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#delete ComputeOrganizationSecurityPolicyRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#update ComputeOrganizationSecurityPolicyRule#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_header_action` <a name="reset_header_action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetHeaderAction"></a>

```python
def reset_header_action() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_preconfigured_waf_config` <a name="reset_preconfigured_waf_config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreconfiguredWafConfig"></a>

```python
def reset_preconfigured_waf_config() -> None
```

##### `reset_preview` <a name="reset_preview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetPreview"></a>

```python
def reset_preview() -> None
```

##### `reset_redirect_options` <a name="reset_redirect_options" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetRedirectOptions"></a>

```python
def reset_redirect_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeOrganizationSecurityPolicyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeOrganizationSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeOrganizationSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerAction">header_action</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference">ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference">ComputeOrganizationSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptions">redirect_options</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference">ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerActionInput">header_action_input</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfigInput">preconfigured_waf_config_input</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.previewInput">preview_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptionsInput">redirect_options_input</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preview">preview</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `header_action`<sup>Required</sup> <a name="header_action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerAction"></a>

```python
header_action: ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference">ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.match"></a>

```python
match: ComputeOrganizationSecurityPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference">ComputeOrganizationSecurityPolicyRuleMatchOutputReference</a>

---

##### `preconfigured_waf_config`<sup>Required</sup> <a name="preconfigured_waf_config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfig"></a>

```python
preconfigured_waf_config: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `redirect_options`<sup>Required</sup> <a name="redirect_options" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptions"></a>

```python
redirect_options: ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference">ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeouts"></a>

```python
timeouts: ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `header_action_input`<sup>Optional</sup> <a name="header_action_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.headerActionInput"></a>

```python
header_action_input: ComputeOrganizationSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.matchInput"></a>

```python
match_input: ComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `preconfigured_waf_config_input`<sup>Optional</sup> <a name="preconfigured_waf_config_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfigInput"></a>

```python
preconfigured_waf_config_input: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `preview_input`<sup>Optional</sup> <a name="preview_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.previewInput"></a>

```python
preview_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_options_input`<sup>Optional</sup> <a name="redirect_options_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.redirectOptionsInput"></a>

```python
redirect_options_input: ComputeOrganizationSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeOrganizationSecurityPolicyRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.preview"></a>

```python
preview: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrganizationSecurityPolicyRuleConfig <a name="ComputeOrganizationSecurityPolicyRuleConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  match: ComputeOrganizationSecurityPolicyRuleMatch,
  policy_id: str,
  priority: typing.Union[int, float],
  deletion_policy: str = None,
  description: str = None,
  header_action: ComputeOrganizationSecurityPolicyRuleHeaderAction = None,
  id: str = None,
  preconfigured_waf_config: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig = None,
  preview: bool | IResolvable = None,
  redirect_options: ComputeOrganizationSecurityPolicyRuleRedirectOptions = None,
  timeouts: ComputeOrganizationSecurityPolicyRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.policyId">policy_id</a></code> | <code>str</code> | The ID of the OrganizationSecurityPolicy this rule applies to. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.description">description</a></code> | <code>str</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.headerAction">header_action</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preview">preview</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.redirectOptions">redirect_options</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The Action to perform when the client connection triggers the rule.

Valid actions are:
"allow": allow access to target.
"deny": deny access to target.
"goto_next": forward the request to the next hierarchical policy for evaluation.
"redirect": redirect to a different target. Parameters for this action can be configured via redirectOptions. Only EXTERNAL_302 redirect type is supported for organization security policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#action ComputeOrganizationSecurityPolicyRule#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.match"></a>

```python
match: ComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#match ComputeOrganizationSecurityPolicyRule#match}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

The ID of the OrganizationSecurityPolicy this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#policy_id ComputeOrganizationSecurityPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#priority ComputeOrganizationSecurityPolicyRule#priority}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#deletion_policy ComputeOrganizationSecurityPolicyRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}

---

##### `header_action`<sup>Optional</sup> <a name="header_action" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.headerAction"></a>

```python
header_action: ComputeOrganizationSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#header_action ComputeOrganizationSecurityPolicyRule#header_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preconfigured_waf_config`<sup>Optional</sup> <a name="preconfigured_waf_config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preconfiguredWafConfig"></a>

```python
preconfigured_waf_config: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#preconfigured_waf_config ComputeOrganizationSecurityPolicyRule#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.preview"></a>

```python
preview: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#preview ComputeOrganizationSecurityPolicyRule#preview}

---

##### `redirect_options`<sup>Optional</sup> <a name="redirect_options" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.redirectOptions"></a>

```python
redirect_options: ComputeOrganizationSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#redirect_options ComputeOrganizationSecurityPolicyRule#redirect_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleConfig.property.timeouts"></a>

```python
timeouts: ComputeOrganizationSecurityPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#timeouts ComputeOrganizationSecurityPolicyRule#timeouts}

---

### ComputeOrganizationSecurityPolicyRuleHeaderAction <a name="ComputeOrganizationSecurityPolicyRuleHeaderAction" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction(
  request_headers_to_adds: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds">request_headers_to_adds</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]</code> | request_headers_to_adds block. |

---

##### `request_headers_to_adds`<sup>Optional</sup> <a name="request_headers_to_adds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds"></a>

```python
request_headers_to_adds: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_headers_to_adds ComputeOrganizationSecurityPolicyRule#request_headers_to_adds}

---

### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds(
  header_name: str = None,
  header_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName">header_name</a></code> | <code>str</code> | The name of the header to set. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue">header_value</a></code> | <code>str</code> | The value to set the named header to. |

---

##### `header_name`<sup>Optional</sup> <a name="header_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#header_name ComputeOrganizationSecurityPolicyRule#header_name}

---

##### `header_value`<sup>Optional</sup> <a name="header_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#header_value ComputeOrganizationSecurityPolicyRule#header_value}

---

### ComputeOrganizationSecurityPolicyRuleMatch <a name="ComputeOrganizationSecurityPolicyRuleMatch" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch(
  config: ComputeOrganizationSecurityPolicyRuleMatchConfig = None,
  description: str = None,
  expr: ComputeOrganizationSecurityPolicyRuleMatchExpr = None,
  versioned_expr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.description">description</a></code> | <code>str</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.expr">expr</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr">versioned_expr</a></code> | <code>str</code> | Preconfigured versioned expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.config"></a>

```python
config: ComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#config ComputeOrganizationSecurityPolicyRule#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.expr"></a>

```python
expr: ComputeOrganizationSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#expr ComputeOrganizationSecurityPolicyRule#expr}

---

##### `versioned_expr`<sup>Optional</sup> <a name="versioned_expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr"></a>

```python
versioned_expr: str
```

- *Type:* str

Preconfigured versioned expression.

For organization security policy rules,
the only supported type is "SRC_IPS_V1".
**NOTE** : 'FIREWALL' type is deprecated. Please use 'google_compute_firewall_policy_rule' resource instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#versioned_expr ComputeOrganizationSecurityPolicyRule#versioned_expr}

---

### ComputeOrganizationSecurityPolicyRuleMatchConfig <a name="ComputeOrganizationSecurityPolicyRuleMatchConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig(
  src_ip_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | Source IP address range in CIDR format. Required for INGRESS rules. |

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#src_ip_ranges ComputeOrganizationSecurityPolicyRule#src_ip_ranges}

---

### ComputeOrganizationSecurityPolicyRuleMatchExpr <a name="ComputeOrganizationSecurityPolicyRuleMatchExpr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#expression ComputeOrganizationSecurityPolicyRule#expression}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig(
  exclusion: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">exclusion</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]</code> | exclusion block. |

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```python
exclusion: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#exclusion ComputeOrganizationSecurityPolicyRule#exclusion}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion(
  target_rule_set: str,
  request_cookie: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie] = None,
  request_header: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader] = None,
  request_query_param: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam] = None,
  request_uri: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri] = None,
  target_rule_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">target_rule_set</a></code> | <code>str</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">request_cookie</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]</code> | request_cookie block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">request_header</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]</code> | request_header block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">request_query_param</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]</code> | request_query_param block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">request_uri</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]</code> | request_uri block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">target_rule_ids</a></code> | <code>typing.List[str]</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `target_rule_set`<sup>Required</sup> <a name="target_rule_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```python
target_rule_set: str
```

- *Type:* str

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#target_rule_set ComputeOrganizationSecurityPolicyRule#target_rule_set}

---

##### `request_cookie`<sup>Optional</sup> <a name="request_cookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```python
request_cookie: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_cookie ComputeOrganizationSecurityPolicyRule#request_cookie}

---

##### `request_header`<sup>Optional</sup> <a name="request_header" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```python
request_header: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_header ComputeOrganizationSecurityPolicyRule#request_header}

---

##### `request_query_param`<sup>Optional</sup> <a name="request_query_param" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```python
request_query_param: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_query_param ComputeOrganizationSecurityPolicyRule#request_query_param}

---

##### `request_uri`<sup>Optional</sup> <a name="request_uri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```python
request_uri: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#request_uri ComputeOrganizationSecurityPolicyRule#request_uri}

---

##### `target_rule_ids`<sup>Optional</sup> <a name="target_rule_ids" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```python
target_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#target_rule_ids ComputeOrganizationSecurityPolicyRule#target_rule_ids}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}

---

### ComputeOrganizationSecurityPolicyRuleRedirectOptions <a name="ComputeOrganizationSecurityPolicyRuleRedirectOptions" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions(
  type: str,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.type">type</a></code> | <code>str</code> | Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.target">target</a></code> | <code>str</code> | Target for the redirect action. This is required if the type is EXTERNAL_302. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#type ComputeOrganizationSecurityPolicyRule#type}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions.property.target"></a>

```python
target: str
```

- *Type:* str

Target for the redirect action. This is required if the type is EXTERNAL_302.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#target ComputeOrganizationSecurityPolicyRule#target}

---

### ComputeOrganizationSecurityPolicyRuleTimeouts <a name="ComputeOrganizationSecurityPolicyRuleTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#create ComputeOrganizationSecurityPolicyRule#create}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#delete ComputeOrganizationSecurityPolicyRule#delete}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#update ComputeOrganizationSecurityPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#create ComputeOrganizationSecurityPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#delete ComputeOrganizationSecurityPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#update ComputeOrganizationSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds">put_request_headers_to_adds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resetRequestHeadersToAdds">reset_request_headers_to_adds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_headers_to_adds` <a name="put_request_headers_to_adds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds"></a>

```python
def put_request_headers_to_adds(
  value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]

---

##### `reset_request_headers_to_adds` <a name="reset_request_headers_to_adds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resetRequestHeadersToAdds"></a>

```python
def reset_request_headers_to_adds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">request_headers_to_adds</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput">request_headers_to_adds_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_headers_to_adds`<sup>Required</sup> <a name="request_headers_to_adds" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```python
request_headers_to_adds: ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `request_headers_to_adds_input`<sup>Optional</sup> <a name="request_headers_to_adds_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput"></a>

```python
request_headers_to_adds_input: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeOrganizationSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderAction">ComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---


### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]

---


### ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderName">reset_header_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue">reset_header_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_name` <a name="reset_header_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderName"></a>

```python
def reset_header_name() -> None
```

##### `reset_header_value` <a name="reset_header_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue"></a>

```python
def reset_header_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput">header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_value_input`<sup>Optional</sup> <a name="header_value_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput"></a>

```python
header_value_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>

---


### ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---


### ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```python
internal_value: ComputeOrganizationSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---


### ComputeOrganizationSecurityPolicyRuleMatchOutputReference <a name="ComputeOrganizationSecurityPolicyRuleMatchOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr">put_expr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetExpr">reset_expr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">reset_versioned_expr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```python
def put_config(
  src_ip_ranges: typing.List[str] = None
) -> None
```

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#src_ip_ranges ComputeOrganizationSecurityPolicyRule#src_ip_ranges}

---

##### `put_expr` <a name="put_expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```python
def put_expr(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy_rule#expression ComputeOrganizationSecurityPolicyRule#expression}

---

##### `reset_config` <a name="reset_config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expr` <a name="reset_expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```python
def reset_expr() -> None
```

##### `reset_versioned_expr` <a name="reset_versioned_expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```python
def reset_versioned_expr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference">ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.exprInput">expr_input</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">versioned_expr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr">versioned_expr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config"></a>

```python
config: ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```python
expr: ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference">ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```python
config_input: ComputeOrganizationSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchConfig">ComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expr_input`<sup>Optional</sup> <a name="expr_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```python
expr_input: ComputeOrganizationSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchExpr">ComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---

##### `versioned_expr_input`<sup>Optional</sup> <a name="versioned_expr_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```python
versioned_expr_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `versioned_expr`<sup>Required</sup> <a name="versioned_expr" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```python
versioned_expr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: ComputeOrganizationSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleMatch">ComputeOrganizationSecurityPolicyRuleMatch</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">put_request_cookie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">put_request_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">put_request_query_param</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">put_request_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">reset_request_cookie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">reset_request_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">reset_request_query_param</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">reset_request_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">reset_target_rule_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_cookie` <a name="put_request_cookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```python
def put_request_cookie(
  value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]

---

##### `put_request_header` <a name="put_request_header" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```python
def put_request_header(
  value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]

---

##### `put_request_query_param` <a name="put_request_query_param" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```python
def put_request_query_param(
  value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]

---

##### `put_request_uri` <a name="put_request_uri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```python
def put_request_uri(
  value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]

---

##### `reset_request_cookie` <a name="reset_request_cookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```python
def reset_request_cookie() -> None
```

##### `reset_request_header` <a name="reset_request_header" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```python
def reset_request_header() -> None
```

##### `reset_request_query_param` <a name="reset_request_query_param" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```python
def reset_request_query_param() -> None
```

##### `reset_request_uri` <a name="reset_request_uri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```python
def reset_request_uri() -> None
```

##### `reset_target_rule_ids` <a name="reset_target_rule_ids" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```python
def reset_target_rule_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">request_cookie</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">request_header</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">request_query_param</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">request_uri</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">request_cookie_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">request_header_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">request_query_param_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">request_uri_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">target_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">target_rule_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">target_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">target_rule_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_cookie`<sup>Required</sup> <a name="request_cookie" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```python
request_cookie: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `request_header`<sup>Required</sup> <a name="request_header" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```python
request_header: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `request_query_param`<sup>Required</sup> <a name="request_query_param" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```python
request_query_param: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```python
request_uri: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `request_cookie_input`<sup>Optional</sup> <a name="request_cookie_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```python
request_cookie_input: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]

---

##### `request_header_input`<sup>Optional</sup> <a name="request_header_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```python
request_header_input: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]

---

##### `request_query_param_input`<sup>Optional</sup> <a name="request_query_param_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```python
request_query_param_input: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]

---

##### `request_uri_input`<sup>Optional</sup> <a name="request_uri_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```python
request_uri_input: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]

---

##### `target_rule_ids_input`<sup>Optional</sup> <a name="target_rule_ids_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```python
target_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_rule_set_input`<sup>Optional</sup> <a name="target_rule_set_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```python
target_rule_set_input: str
```

- *Type:* str

---

##### `target_rule_ids`<sup>Required</sup> <a name="target_rule_ids" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```python
target_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_rule_set`<sup>Required</sup> <a name="target_rule_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```python
target_rule_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>

---


### ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]

---

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```python
exclusion: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```python
exclusion_input: IResolvable | typing.List[ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---


### ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target` <a name="reset_target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeOrganizationSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleRedirectOptions">ComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---


### ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference <a name="ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_organization_security_policy_rule

computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeOrganizationSecurityPolicyRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyRule.ComputeOrganizationSecurityPolicyRuleTimeouts">ComputeOrganizationSecurityPolicyRuleTimeouts</a>

---



