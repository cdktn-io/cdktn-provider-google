# `cloudSecurityComplianceFramework` Submodule <a name="`cloudSecurityComplianceFramework` Submodule" id="@cdktn/provider-google.cloudSecurityComplianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudSecurityComplianceFramework <a name="CloudSecurityComplianceFramework" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework google_cloud_security_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFramework;

CloudSecurityComplianceFramework.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .frameworkId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .cloudControlDetails(IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetails>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudSecurityComplianceFrameworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.frameworkId">frameworkId</a></code> | <code>java.lang.String</code> | ID of the framework. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.cloudControlDetails">cloudControlDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>></code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the framework. The maximum length is 2000 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the framework. The maximum length is 200 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.frameworkId"></a>

- *Type:* java.lang.String

ID of the framework.

This is not the full name of the framework.
This is the last part of the full name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#framework_id CloudSecurityComplianceFramework#framework_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#location CloudSecurityComplianceFramework#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#organization CloudSecurityComplianceFramework#organization}

---

##### `cloudControlDetails`<sup>Optional</sup> <a name="cloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.cloudControlDetails"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>>

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#cloud_control_details CloudSecurityComplianceFramework#cloud_control_details}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#deletion_policy CloudSecurityComplianceFramework#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the framework. The maximum length is 2000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#description CloudSecurityComplianceFramework#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the framework. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#display_name CloudSecurityComplianceFramework#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#timeouts CloudSecurityComplianceFramework#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails">putCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetCloudControlDetails">resetCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudControlDetails` <a name="putCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails"></a>

```java
public void putCloudControlDetails(IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts"></a>

```java
public void putTimeouts(CloudSecurityComplianceFrameworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

---

##### `resetCloudControlDetails` <a name="resetCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetCloudControlDetails"></a>

```java
public void resetCloudControlDetails()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFramework;

CloudSecurityComplianceFramework.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFramework;

CloudSecurityComplianceFramework.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFramework;

CloudSecurityComplianceFramework.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFramework;

CloudSecurityComplianceFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudSecurityComplianceFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudSecurityComplianceFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudSecurityComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudSecurityComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.category">category</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetails">cloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList">CloudSecurityComplianceFrameworkCloudControlDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.majorRevisionId">majorRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedCloudProviders">supportedCloudProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedEnforcementModes">supportedEnforcementModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedTargetResourceTypes">supportedTargetResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference">CloudSecurityComplianceFrameworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetailsInput">cloudControlDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkIdInput">frameworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkId">frameworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.category"></a>

```java
public java.util.List<java.lang.String> getCategory();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cloudControlDetails`<sup>Required</sup> <a name="cloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetails"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsList getCloudControlDetails();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList">CloudSecurityComplianceFrameworkCloudControlDetailsList</a>

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.majorRevisionId"></a>

```java
public java.lang.String getMajorRevisionId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `supportedCloudProviders`<sup>Required</sup> <a name="supportedCloudProviders" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedCloudProviders"></a>

```java
public java.util.List<java.lang.String> getSupportedCloudProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedEnforcementModes`<sup>Required</sup> <a name="supportedEnforcementModes" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedEnforcementModes"></a>

```java
public java.util.List<java.lang.String> getSupportedEnforcementModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedTargetResourceTypes`<sup>Required</sup> <a name="supportedTargetResourceTypes" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedTargetResourceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedTargetResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeouts"></a>

```java
public CloudSecurityComplianceFrameworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference">CloudSecurityComplianceFrameworkTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `cloudControlDetailsInput`<sup>Optional</sup> <a name="cloudControlDetailsInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetailsInput"></a>

```java
public IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetails> getCloudControlDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `frameworkIdInput`<sup>Optional</sup> <a name="frameworkIdInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkIdInput"></a>

```java
public java.lang.String getFrameworkIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeoutsInput"></a>

```java
public IResolvable|CloudSecurityComplianceFrameworkTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkId"></a>

```java
public java.lang.String getFrameworkId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudSecurityComplianceFrameworkCloudControlDetails <a name="CloudSecurityComplianceFrameworkCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetails;

CloudSecurityComplianceFrameworkCloudControlDetails.builder()
    .majorRevisionId(java.lang.String)
    .name(java.lang.String)
//  .parameters(IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetailsParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId">majorRevisionId</a></code> | <code>java.lang.String</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>></code> | parameters block. |

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId"></a>

```java
public java.lang.String getMajorRevisionId();
```

- *Type:* java.lang.String

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#major_revision_id CloudSecurityComplianceFramework#major_revision_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.parameters"></a>

```java
public IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetailsParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#parameters CloudSecurityComplianceFramework#parameters}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParameters <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters;

CloudSecurityComplianceFrameworkCloudControlDetailsParameters.builder()
    .name(java.lang.String)
    .parameterValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name">name</a></code> | <code>java.lang.String</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue getParameterValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#parameter_value CloudSecurityComplianceFramework#parameter_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue;

CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .numberValue(java.lang.Number)
//  .oneofValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue)
//  .stringListValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue">oneofValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#bool_value CloudSecurityComplianceFramework#bool_value}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#number_value CloudSecurityComplianceFramework#number_value}

---

##### `oneofValue`<sup>Optional</sup> <a name="oneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue getOneofValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#oneof_value CloudSecurityComplianceFramework#oneof_value}

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue getStringListValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#string_list_value CloudSecurityComplianceFramework#string_list_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#string_value CloudSecurityComplianceFramework#string_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue;

CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.builder()
//  .name(java.lang.String)
//  .parameterValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name">name</a></code> | <code>java.lang.String</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue getParameterValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#parameter_value CloudSecurityComplianceFramework#parameter_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue;

CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .numberValue(java.lang.Number)
//  .stringListValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#bool_value CloudSecurityComplianceFramework#bool_value}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#number_value CloudSecurityComplianceFramework#number_value}

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue getStringListValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#string_list_value CloudSecurityComplianceFramework#string_list_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#string_value CloudSecurityComplianceFramework#string_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;

CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.builder()
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#values CloudSecurityComplianceFramework#values}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue;

CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.builder()
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#values CloudSecurityComplianceFramework#values}

---

### CloudSecurityComplianceFrameworkConfig <a name="CloudSecurityComplianceFrameworkConfig" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkConfig;

CloudSecurityComplianceFrameworkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .frameworkId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .cloudControlDetails(IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetails>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudSecurityComplianceFrameworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.frameworkId">frameworkId</a></code> | <code>java.lang.String</code> | ID of the framework. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.cloudControlDetails">cloudControlDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>></code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the framework. The maximum length is 2000 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the framework. The maximum length is 200 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.frameworkId"></a>

```java
public java.lang.String getFrameworkId();
```

- *Type:* java.lang.String

ID of the framework.

This is not the full name of the framework.
This is the last part of the full name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#framework_id CloudSecurityComplianceFramework#framework_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#location CloudSecurityComplianceFramework#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#organization CloudSecurityComplianceFramework#organization}

---

##### `cloudControlDetails`<sup>Optional</sup> <a name="cloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.cloudControlDetails"></a>

```java
public IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetails> getCloudControlDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>>

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#cloud_control_details CloudSecurityComplianceFramework#cloud_control_details}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#deletion_policy CloudSecurityComplianceFramework#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the framework. The maximum length is 2000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#description CloudSecurityComplianceFramework#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the framework. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#display_name CloudSecurityComplianceFramework#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.timeouts"></a>

```java
public CloudSecurityComplianceFrameworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#timeouts CloudSecurityComplianceFramework#timeouts}

---

### CloudSecurityComplianceFrameworkTimeouts <a name="CloudSecurityComplianceFrameworkTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkTimeouts;

CloudSecurityComplianceFrameworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#create CloudSecurityComplianceFramework#create}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#delete CloudSecurityComplianceFramework#delete}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#update CloudSecurityComplianceFramework#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#create CloudSecurityComplianceFramework#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#delete CloudSecurityComplianceFramework#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloud_security_compliance_framework#update CloudSecurityComplianceFramework#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSecurityComplianceFrameworkCloudControlDetailsList <a name="CloudSecurityComplianceFrameworkCloudControlDetailsList" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsList;

new CloudSecurityComplianceFrameworkCloudControlDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference;

new CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetailsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList">CloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput">majorRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId">majorRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList">CloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a>

---

##### `majorRevisionIdInput`<sup>Optional</sup> <a name="majorRevisionIdInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```java
public java.lang.String getMajorRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetailsParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>>

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```java
public java.lang.String getMajorRevisionId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudSecurityComplianceFrameworkCloudControlDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersList <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersList" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList;

new CloudSecurityComplianceFrameworkCloudControlDetailsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudSecurityComplianceFrameworkCloudControlDetailsParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference;

new CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue">putParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterValue` <a name="putParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```java
public void putParameterValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference getParameterValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue getParameterValueInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudSecurityComplianceFrameworkCloudControlDetailsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference;

new CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">putParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterValue` <a name="putParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```java
public void putParameterValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```java
public void resetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference getParameterValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue getParameterValueInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference;

new CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">putStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringListValue` <a name="putStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```java
public void putStringListValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```java
public void resetNumberValue()
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```java
public void resetStringListValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference getStringListValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```java
public java.lang.Number getNumberValueInput();
```

- *Type:* java.lang.Number

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue getStringListValueInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference;

new CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference;

new CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">putOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">putStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">resetOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOneofValue` <a name="putOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```java
public void putOneofValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `putStringListValue` <a name="putStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```java
public void putStringListValue(CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```java
public void resetNumberValue()
```

##### `resetOneofValue` <a name="resetOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```java
public void resetOneofValue()
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```java
public void resetStringListValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">oneofValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">oneofValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oneofValue`<sup>Required</sup> <a name="oneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference getOneofValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference getStringListValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```java
public java.lang.Number getNumberValueInput();
```

- *Type:* java.lang.Number

---

##### `oneofValueInput`<sup>Optional</sup> <a name="oneofValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue getOneofValueInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue getStringListValueInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference;

new CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```java
public CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---


### CloudSecurityComplianceFrameworkTimeoutsOutputReference <a name="CloudSecurityComplianceFrameworkTimeoutsOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_security_compliance_framework.CloudSecurityComplianceFrameworkTimeoutsOutputReference;

new CloudSecurityComplianceFrameworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudSecurityComplianceFrameworkTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

---



