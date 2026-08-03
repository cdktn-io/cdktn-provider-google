# `computeOrganizationSecurityPolicy` Submodule <a name="`computeOrganizationSecurityPolicy` Submodule" id="@cdktn/provider-google.computeOrganizationSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrganizationSecurityPolicy <a name="ComputeOrganizationSecurityPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy google_compute_organization_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicy;

ComputeOrganizationSecurityPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .advancedOptionsConfig(ComputeOrganizationSecurityPolicyAdvancedOptionsConfig)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .shortName(java.lang.String)
//  .timeouts(ComputeOrganizationSecurityPolicyTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A textual description for the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#id ComputeOrganizationSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type indicates the intended use of the security policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#parent ComputeOrganizationSecurityPolicy#parent}

---

##### `advancedOptionsConfig`<sup>Optional</sup> <a name="advancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.advancedOptionsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#advanced_options_config ComputeOrganizationSecurityPolicy#advanced_options_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#deletion_policy ComputeOrganizationSecurityPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A textual description for the organization security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#description ComputeOrganizationSecurityPolicy#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#display_name ComputeOrganizationSecurityPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#id ComputeOrganizationSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is CLOUD_ARMOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#short_name ComputeOrganizationSecurityPolicy#short_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#timeouts ComputeOrganizationSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type indicates the intended use of the security policy.

This field can be set only at resource creation time.

**NOTE** : 'FIREWALL' type is deprecated and will be removed in a future major release. Please use 'google_compute_firewall_policy' instead." Possible values: ["FIREWALL", "CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_INTERNAL_SERVICE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#type ComputeOrganizationSecurityPolicy#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig">putAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig">resetAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedOptionsConfig` <a name="putAdvancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig"></a>

```java
public void putAdvancedOptionsConfig(ComputeOrganizationSecurityPolicyAdvancedOptionsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putTimeouts"></a>

```java
public void putTimeouts(ComputeOrganizationSecurityPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

---

##### `resetAdvancedOptionsConfig` <a name="resetAdvancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig"></a>

```java
public void resetAdvancedOptionsConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetShortName` <a name="resetShortName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetShortName"></a>

```java
public void resetShortName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicy;

ComputeOrganizationSecurityPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicy;

ComputeOrganizationSecurityPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicy;

ComputeOrganizationSecurityPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicy;

ComputeOrganizationSecurityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeOrganizationSecurityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeOrganizationSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeOrganizationSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeOrganizationSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference">ComputeOrganizationSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput">advancedOptionsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `advancedOptionsConfig`<sup>Required</sup> <a name="advancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.advancedOptionsConfig"></a>

```java
public ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference getAdvancedOptionsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.timeouts"></a>

```java
public ComputeOrganizationSecurityPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference">ComputeOrganizationSecurityPolicyTimeoutsOutputReference</a>

---

##### `advancedOptionsConfigInput`<sup>Optional</sup> <a name="advancedOptionsConfigInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput"></a>

```java
public ComputeOrganizationSecurityPolicyAdvancedOptionsConfig getAdvancedOptionsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.timeoutsInput"></a>

```java
public IResolvable|ComputeOrganizationSecurityPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrganizationSecurityPolicyAdvancedOptionsConfig <a name="ComputeOrganizationSecurityPolicyAdvancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig;

ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.builder()
//  .jsonCustomConfig(ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig)
//  .jsonParsing(java.lang.String)
//  .logLevel(java.lang.String)
//  .requestBodyInspectionSize(java.lang.String)
//  .userIpRequestHeaders(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">jsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">jsonParsing</a></code> | <code>java.lang.String</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"]. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"]. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize">requestBodyInspectionSize</a></code> | <code>java.lang.String</code> | The maximum request size chosen by the customer with Waf enabled. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders">userIpRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of case-insensitive request header names to use for resolving the client source IP address. |

---

##### `jsonCustomConfig`<sup>Optional</sup> <a name="jsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```java
public ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig getJsonCustomConfig();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#json_custom_config ComputeOrganizationSecurityPolicy#json_custom_config}

---

##### `jsonParsing`<sup>Optional</sup> <a name="jsonParsing" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```java
public java.lang.String getJsonParsing();
```

- *Type:* java.lang.String

JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#json_parsing ComputeOrganizationSecurityPolicy#json_parsing}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#log_level ComputeOrganizationSecurityPolicy#log_level}

---

##### `requestBodyInspectionSize`<sup>Optional</sup> <a name="requestBodyInspectionSize" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize"></a>

```java
public java.lang.String getRequestBodyInspectionSize();
```

- *Type:* java.lang.String

The maximum request size chosen by the customer with Waf enabled.

Values supported are "8KB", "16KB", "32KB", "48KB" and "64KB".
Values are case insensitive. Possible values: ["8KB", "16KB", "32KB", "48KB", "64KB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#request_body_inspection_size ComputeOrganizationSecurityPolicy#request_body_inspection_size}

---

##### `userIpRequestHeaders`<sup>Optional</sup> <a name="userIpRequestHeaders" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getUserIpRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

An optional list of case-insensitive request header names to use for resolving the client source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#user_ip_request_headers ComputeOrganizationSecurityPolicy#user_ip_request_headers}

---

### ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;

ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.builder()
    .contentTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">contentTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of content types to be parsed as JSON. |

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```java
public java.util.List<java.lang.String> getContentTypes();
```

- *Type:* java.util.List<java.lang.String>

A list of content types to be parsed as JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#content_types ComputeOrganizationSecurityPolicy#content_types}

---

### ComputeOrganizationSecurityPolicyConfig <a name="ComputeOrganizationSecurityPolicyConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicyConfig;

ComputeOrganizationSecurityPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .advancedOptionsConfig(ComputeOrganizationSecurityPolicyAdvancedOptionsConfig)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .shortName(java.lang.String)
//  .timeouts(ComputeOrganizationSecurityPolicyTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | A textual description for the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#id ComputeOrganizationSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type indicates the intended use of the security policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#parent ComputeOrganizationSecurityPolicy#parent}

---

##### `advancedOptionsConfig`<sup>Optional</sup> <a name="advancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```java
public ComputeOrganizationSecurityPolicyAdvancedOptionsConfig getAdvancedOptionsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#advanced_options_config ComputeOrganizationSecurityPolicy#advanced_options_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#deletion_policy ComputeOrganizationSecurityPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A textual description for the organization security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#description ComputeOrganizationSecurityPolicy#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#display_name ComputeOrganizationSecurityPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#id ComputeOrganizationSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is CLOUD_ARMOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#short_name ComputeOrganizationSecurityPolicy#short_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.timeouts"></a>

```java
public ComputeOrganizationSecurityPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#timeouts ComputeOrganizationSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type indicates the intended use of the security policy.

This field can be set only at resource creation time.

**NOTE** : 'FIREWALL' type is deprecated and will be removed in a future major release. Please use 'google_compute_firewall_policy' instead." Possible values: ["FIREWALL", "CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_INTERNAL_SERVICE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#type ComputeOrganizationSecurityPolicy#type}

---

### ComputeOrganizationSecurityPolicyTimeouts <a name="ComputeOrganizationSecurityPolicyTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicyTimeouts;

ComputeOrganizationSecurityPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#create ComputeOrganizationSecurityPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#delete ComputeOrganizationSecurityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#update ComputeOrganizationSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#create ComputeOrganizationSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#delete ComputeOrganizationSecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_organization_security_policy#update ComputeOrganizationSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference;

new ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">contentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">contentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypesInput`<sup>Optional</sup> <a name="contentTypesInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```java
public java.util.List<java.lang.String> getContentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```java
public java.util.List<java.lang.String> getContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```java
public ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference <a name="ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference;

new ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">putJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">resetJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">resetJsonParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize">resetRequestBodyInspectionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders">resetUserIpRequestHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJsonCustomConfig` <a name="putJsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```java
public void putJsonCustomConfig(ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `resetJsonCustomConfig` <a name="resetJsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```java
public void resetJsonCustomConfig()
```

##### `resetJsonParsing` <a name="resetJsonParsing" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```java
public void resetJsonParsing()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetRequestBodyInspectionSize` <a name="resetRequestBodyInspectionSize" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize"></a>

```java
public void resetRequestBodyInspectionSize()
```

##### `resetUserIpRequestHeaders` <a name="resetUserIpRequestHeaders" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders"></a>

```java
public void resetUserIpRequestHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">jsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">jsonCustomConfigInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">jsonParsingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput">requestBodyInspectionSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput">userIpRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">jsonParsing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize">requestBodyInspectionSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">userIpRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonCustomConfig`<sup>Required</sup> <a name="jsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```java
public ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference getJsonCustomConfig();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `jsonCustomConfigInput`<sup>Optional</sup> <a name="jsonCustomConfigInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```java
public ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig getJsonCustomConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `jsonParsingInput`<sup>Optional</sup> <a name="jsonParsingInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```java
public java.lang.String getJsonParsingInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `requestBodyInspectionSizeInput`<sup>Optional</sup> <a name="requestBodyInspectionSizeInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput"></a>

```java
public java.lang.String getRequestBodyInspectionSizeInput();
```

- *Type:* java.lang.String

---

##### `userIpRequestHeadersInput`<sup>Optional</sup> <a name="userIpRequestHeadersInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getUserIpRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jsonParsing`<sup>Required</sup> <a name="jsonParsing" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```java
public java.lang.String getJsonParsing();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `requestBodyInspectionSize`<sup>Required</sup> <a name="requestBodyInspectionSize" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize"></a>

```java
public java.lang.String getRequestBodyInspectionSize();
```

- *Type:* java.lang.String

---

##### `userIpRequestHeaders`<sup>Required</sup> <a name="userIpRequestHeaders" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getUserIpRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```java
public ComputeOrganizationSecurityPolicyAdvancedOptionsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---


### ComputeOrganizationSecurityPolicyTimeoutsOutputReference <a name="ComputeOrganizationSecurityPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference;

new ComputeOrganizationSecurityPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeOrganizationSecurityPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

---



