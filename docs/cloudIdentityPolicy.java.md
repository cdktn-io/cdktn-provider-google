# `cloudIdentityPolicy` Submodule <a name="`cloudIdentityPolicy` Submodule" id="@cdktn/provider-google.cloudIdentityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityPolicy <a name="CloudIdentityPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy google_cloud_identity_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicy;

CloudIdentityPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customer(java.lang.String)
    .policyQuery(CloudIdentityPolicyPolicyQuery)
    .setting(CloudIdentityPolicySetting)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudIdentityPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.customer">customer</a></code> | <code>java.lang.String</code> | The customer that the Policy belongs to. Format: 'customers/{customer_id}'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a></code> | policy_query block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.setting">setting</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a></code> | setting block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#id CloudIdentityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.customer"></a>

- *Type:* java.lang.String

The customer that the Policy belongs to. Format: 'customers/{customer_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#customer CloudIdentityPolicy#customer}

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.policyQuery"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

policy_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#policy_query CloudIdentityPolicy#policy_query}

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.setting"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#setting CloudIdentityPolicy#setting}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#deletion_policy CloudIdentityPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#id CloudIdentityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#timeouts CloudIdentityPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putPolicyQuery">putPolicyQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putSetting">putSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyQuery` <a name="putPolicyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putPolicyQuery"></a>

```java
public void putPolicyQuery(CloudIdentityPolicyPolicyQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putPolicyQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

---

##### `putSetting` <a name="putSetting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putSetting"></a>

```java
public void putSetting(CloudIdentityPolicySetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putTimeouts"></a>

```java
public void putTimeouts(CloudIdentityPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicy;

CloudIdentityPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicy;

CloudIdentityPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicy;

CloudIdentityPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicy;

CloudIdentityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudIdentityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudIdentityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudIdentityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudIdentityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference">CloudIdentityPolicyPolicyQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference">CloudIdentityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference">CloudIdentityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.customerInput">customerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.policyQueryInput">policyQueryInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.settingInput">settingInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.customer">customer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.policyQuery"></a>

```java
public CloudIdentityPolicyPolicyQueryOutputReference getPolicyQuery();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference">CloudIdentityPolicyPolicyQueryOutputReference</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.setting"></a>

```java
public CloudIdentityPolicySettingOutputReference getSetting();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference">CloudIdentityPolicySettingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.timeouts"></a>

```java
public CloudIdentityPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference">CloudIdentityPolicyTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.customerInput"></a>

```java
public java.lang.String getCustomerInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyQueryInput`<sup>Optional</sup> <a name="policyQueryInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.policyQueryInput"></a>

```java
public CloudIdentityPolicyPolicyQuery getPolicyQueryInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.settingInput"></a>

```java
public CloudIdentityPolicySetting getSettingInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.timeoutsInput"></a>

```java
public IResolvable|CloudIdentityPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityPolicyConfig <a name="CloudIdentityPolicyConfig" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicyConfig;

CloudIdentityPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customer(java.lang.String)
    .policyQuery(CloudIdentityPolicyPolicyQuery)
    .setting(CloudIdentityPolicySetting)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudIdentityPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.customer">customer</a></code> | <code>java.lang.String</code> | The customer that the Policy belongs to. Format: 'customers/{customer_id}'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a></code> | policy_query block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a></code> | setting block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#id CloudIdentityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

The customer that the Policy belongs to. Format: 'customers/{customer_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#customer CloudIdentityPolicy#customer}

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.policyQuery"></a>

```java
public CloudIdentityPolicyPolicyQuery getPolicyQuery();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

policy_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#policy_query CloudIdentityPolicy#policy_query}

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.setting"></a>

```java
public CloudIdentityPolicySetting getSetting();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#setting CloudIdentityPolicy#setting}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#deletion_policy CloudIdentityPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#id CloudIdentityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.timeouts"></a>

```java
public CloudIdentityPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#timeouts CloudIdentityPolicy#timeouts}

---

### CloudIdentityPolicyPolicyQuery <a name="CloudIdentityPolicyPolicyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicyPolicyQuery;

CloudIdentityPolicyPolicyQuery.builder()
    .orgUnit(java.lang.String)
//  .group(java.lang.String)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.orgUnit">orgUnit</a></code> | <code>java.lang.String</code> | The OrgUnit the query applies to, in the format 'orgUnits/{org_unit_id}'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.group">group</a></code> | <code>java.lang.String</code> | The group that the query applies to. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.query">query</a></code> | <code>java.lang.String</code> | The CEL query that defines which entities the Policy applies to. |

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.orgUnit"></a>

```java
public java.lang.String getOrgUnit();
```

- *Type:* java.lang.String

The OrgUnit the query applies to, in the format 'orgUnits/{org_unit_id}'.

'{org_unit_id}' is the obfuscated org unit ID, the same value the Admin SDK
Directory API returns as 'orgUnitId' without its 'id:' prefix. Org unit paths
and display names are not resolved and are rejected for most settings.
For detector settings ('settings/detector.*'), the API ignores this value and
always applies the policy to, and returns, the customer's root org unit, so any
other value produces a diff; set it to the root org unit's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#org_unit CloudIdentityPolicy#org_unit}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The group that the query applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#group CloudIdentityPolicy#group}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The CEL query that defines which entities the Policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#query CloudIdentityPolicy#query}

---

### CloudIdentityPolicySetting <a name="CloudIdentityPolicySetting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicySetting;

CloudIdentityPolicySetting.builder()
    .type(java.lang.String)
    .valueJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.property.type">type</a></code> | <code>java.lang.String</code> | The type of the Setting. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.property.valueJson">valueJson</a></code> | <code>java.lang.String</code> | The value of the Setting as JSON string. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#type CloudIdentityPolicy#type}

---

##### `valueJson`<sup>Required</sup> <a name="valueJson" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.property.valueJson"></a>

```java
public java.lang.String getValueJson();
```

- *Type:* java.lang.String

The value of the Setting as JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#value_json CloudIdentityPolicy#value_json}

---

### CloudIdentityPolicyTimeouts <a name="CloudIdentityPolicyTimeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicyTimeouts;

CloudIdentityPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#create CloudIdentityPolicy#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#delete CloudIdentityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#update CloudIdentityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#create CloudIdentityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#delete CloudIdentityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#update CloudIdentityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityPolicyPolicyQueryOutputReference <a name="CloudIdentityPolicyPolicyQueryOutputReference" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicyPolicyQueryOutputReference;

new CloudIdentityPolicyPolicyQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.orgUnitInput">orgUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit">orgUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder"></a>

```java
public java.lang.Number getSortOrder();
```

- *Type:* java.lang.Number

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `orgUnitInput`<sup>Optional</sup> <a name="orgUnitInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.orgUnitInput"></a>

```java
public java.lang.String getOrgUnitInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit"></a>

```java
public java.lang.String getOrgUnit();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.internalValue"></a>

```java
public CloudIdentityPolicyPolicyQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

---


### CloudIdentityPolicySettingOutputReference <a name="CloudIdentityPolicySettingOutputReference" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicySettingOutputReference;

new CloudIdentityPolicySettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.valueJsonInput">valueJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.valueJson">valueJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueJsonInput`<sup>Optional</sup> <a name="valueJsonInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.valueJsonInput"></a>

```java
public java.lang.String getValueJsonInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `valueJson`<sup>Required</sup> <a name="valueJson" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.valueJson"></a>

```java
public java.lang.String getValueJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.internalValue"></a>

```java
public CloudIdentityPolicySetting getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

---


### CloudIdentityPolicyTimeoutsOutputReference <a name="CloudIdentityPolicyTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_policy.CloudIdentityPolicyTimeoutsOutputReference;

new CloudIdentityPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudIdentityPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

---



