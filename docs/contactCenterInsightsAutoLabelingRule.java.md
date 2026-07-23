# `contactCenterInsightsAutoLabelingRule` Submodule <a name="`contactCenterInsightsAutoLabelingRule` Submodule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAutoLabelingRule <a name="ContactCenterInsightsAutoLabelingRule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule google_contact_center_insights_auto_labeling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRule;

ContactCenterInsightsAutoLabelingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .autoLabelingRuleId(java.lang.String)
//  .conditions(IResolvable|java.util.List<ContactCenterInsightsAutoLabelingRuleConditions>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labelKey(java.lang.String)
//  .labelKeyType(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ContactCenterInsightsAutoLabelingRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>java.lang.String</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKey">labelKey</a></code> | <code>java.lang.String</code> | The label key. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKeyType">labelKeyType</a></code> | <code>java.lang.String</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#location ContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#active ContactCenterInsightsAutoLabelingRule#active}

---

##### `autoLabelingRuleId`<sup>Optional</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.autoLabelingRuleId"></a>

- *Type:* java.lang.String

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#auto_labeling_rule_id ContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.conditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#conditions ContactCenterInsightsAutoLabelingRule#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#deletion_policy ContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#description ContactCenterInsightsAutoLabelingRule#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#display_name ContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelKey`<sup>Optional</sup> <a name="labelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKey"></a>

- *Type:* java.lang.String

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key ContactCenterInsightsAutoLabelingRule#label_key}

---

##### `labelKeyType`<sup>Optional</sup> <a name="labelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKeyType"></a>

- *Type:* java.lang.String

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key_type ContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#timeouts ContactCenterInsightsAutoLabelingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId">resetAutoLabelingRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey">resetLabelKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType">resetLabelKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<ContactCenterInsightsAutoLabelingRuleConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts"></a>

```java
public void putTimeouts(ContactCenterInsightsAutoLabelingRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive"></a>

```java
public void resetActive()
```

##### `resetAutoLabelingRuleId` <a name="resetAutoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId"></a>

```java
public void resetAutoLabelingRuleId()
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId"></a>

```java
public void resetId()
```

##### `resetLabelKey` <a name="resetLabelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey"></a>

```java
public void resetLabelKey()
```

##### `resetLabelKeyType` <a name="resetLabelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType"></a>

```java
public void resetLabelKeyType()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRule;

ContactCenterInsightsAutoLabelingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRule;

ContactCenterInsightsAutoLabelingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRule;

ContactCenterInsightsAutoLabelingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRule;

ContactCenterInsightsAutoLabelingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContactCenterInsightsAutoLabelingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContactCenterInsightsAutoLabelingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContactCenterInsightsAutoLabelingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAutoLabelingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput">autoLabelingRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput">labelKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput">labelKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey">labelKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType">labelKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions"></a>

```java
public ContactCenterInsightsAutoLabelingRuleConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts"></a>

```java
public ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoLabelingRuleIdInput`<sup>Optional</sup> <a name="autoLabelingRuleIdInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput"></a>

```java
public java.lang.String getAutoLabelingRuleIdInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<ContactCenterInsightsAutoLabelingRuleConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelKeyInput`<sup>Optional</sup> <a name="labelKeyInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput"></a>

```java
public java.lang.String getLabelKeyInput();
```

- *Type:* java.lang.String

---

##### `labelKeyTypeInput`<sup>Optional</sup> <a name="labelKeyTypeInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput"></a>

```java
public java.lang.String getLabelKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput"></a>

```java
public IResolvable|ContactCenterInsightsAutoLabelingRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoLabelingRuleId`<sup>Required</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId"></a>

```java
public java.lang.String getAutoLabelingRuleId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labelKey`<sup>Required</sup> <a name="labelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey"></a>

```java
public java.lang.String getLabelKey();
```

- *Type:* java.lang.String

---

##### `labelKeyType`<sup>Required</sup> <a name="labelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType"></a>

```java
public java.lang.String getLabelKeyType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAutoLabelingRuleConditions <a name="ContactCenterInsightsAutoLabelingRuleConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRuleConditions;

ContactCenterInsightsAutoLabelingRuleConditions.builder()
//  .condition(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition">condition</a></code> | <code>java.lang.String</code> | A optional CEL expression to be evaluated as a boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value">value</a></code> | <code>java.lang.String</code> | CEL expression to be evaluated as the value. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

A optional CEL expression to be evaluated as a boolean value.

Once evaluated as true, then we will proceed with the value evaluation.
An empty condition will be auto evaluated as true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#condition ContactCenterInsightsAutoLabelingRule#condition}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

CEL expression to be evaluated as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#value ContactCenterInsightsAutoLabelingRule#value}

---

### ContactCenterInsightsAutoLabelingRuleConfig <a name="ContactCenterInsightsAutoLabelingRuleConfig" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRuleConfig;

ContactCenterInsightsAutoLabelingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .autoLabelingRuleId(java.lang.String)
//  .conditions(IResolvable|java.util.List<ContactCenterInsightsAutoLabelingRuleConditions>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labelKey(java.lang.String)
//  .labelKeyType(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ContactCenterInsightsAutoLabelingRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>java.lang.String</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey">labelKey</a></code> | <code>java.lang.String</code> | The label key. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType">labelKeyType</a></code> | <code>java.lang.String</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#location ContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#active ContactCenterInsightsAutoLabelingRule#active}

---

##### `autoLabelingRuleId`<sup>Optional</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId"></a>

```java
public java.lang.String getAutoLabelingRuleId();
```

- *Type:* java.lang.String

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#auto_labeling_rule_id ContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<ContactCenterInsightsAutoLabelingRuleConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#conditions ContactCenterInsightsAutoLabelingRule#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#deletion_policy ContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#description ContactCenterInsightsAutoLabelingRule#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#display_name ContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelKey`<sup>Optional</sup> <a name="labelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey"></a>

```java
public java.lang.String getLabelKey();
```

- *Type:* java.lang.String

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key ContactCenterInsightsAutoLabelingRule#label_key}

---

##### `labelKeyType`<sup>Optional</sup> <a name="labelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType"></a>

```java
public java.lang.String getLabelKeyType();
```

- *Type:* java.lang.String

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key_type ContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts"></a>

```java
public ContactCenterInsightsAutoLabelingRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#timeouts ContactCenterInsightsAutoLabelingRule#timeouts}

---

### ContactCenterInsightsAutoLabelingRuleTimeouts <a name="ContactCenterInsightsAutoLabelingRuleTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRuleTimeouts;

ContactCenterInsightsAutoLabelingRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAutoLabelingRuleConditionsList <a name="ContactCenterInsightsAutoLabelingRuleConditionsList" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRuleConditionsList;

new ContactCenterInsightsAutoLabelingRuleConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get"></a>

```java
public ContactCenterInsightsAutoLabelingRuleConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ContactCenterInsightsAutoLabelingRuleConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>>

---


### ContactCenterInsightsAutoLabelingRuleConditionsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleConditionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference;

new ContactCenterInsightsAutoLabelingRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|ContactCenterInsightsAutoLabelingRuleConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>

---


### ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_auto_labeling_rule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference;

new ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ContactCenterInsightsAutoLabelingRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---



