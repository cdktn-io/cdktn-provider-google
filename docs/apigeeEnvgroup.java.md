# `apigeeEnvgroup` Submodule <a name="`apigeeEnvgroup` Submodule" id="@cdktn/provider-google.apigeeEnvgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvgroup <a name="ApigeeEnvgroup" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup google_apigee_envgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_envgroup.ApigeeEnvgroup;

ApigeeEnvgroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ApigeeEnvgroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource ID of the environment group. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee environment group, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Hostnames of the environment group. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#id ApigeeEnvgroup#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource ID of the environment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#name ApigeeEnvgroup#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee environment group, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#org_id ApigeeEnvgroup#org_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#deletion_policy ApigeeEnvgroup#deletion_policy}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.hostnames"></a>

- *Type:* java.util.List<java.lang.String>

Hostnames of the environment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#hostnames ApigeeEnvgroup#hostnames}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#id ApigeeEnvgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#timeouts ApigeeEnvgroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.putTimeouts"></a>

```java
public void putTimeouts(ApigeeEnvgroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetHostnames` <a name="resetHostnames" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetHostnames"></a>

```java
public void resetHostnames()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeEnvgroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isConstruct"></a>

```java
import io.cdktn.providers.google.apigee_envgroup.ApigeeEnvgroup;

ApigeeEnvgroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isTerraformElement"></a>

```java
import io.cdktn.providers.google.apigee_envgroup.ApigeeEnvgroup;

ApigeeEnvgroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isTerraformResource"></a>

```java
import io.cdktn.providers.google.apigee_envgroup.ApigeeEnvgroup;

ApigeeEnvgroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.apigee_envgroup.ApigeeEnvgroup;

ApigeeEnvgroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeEnvgroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigeeEnvgroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeEnvgroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeEnvgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference">ApigeeEnvgroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.timeouts"></a>

```java
public ApigeeEnvgroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference">ApigeeEnvgroupTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.timeoutsInput"></a>

```java
public IResolvable|ApigeeEnvgroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvgroupConfig <a name="ApigeeEnvgroupConfig" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_envgroup.ApigeeEnvgroupConfig;

ApigeeEnvgroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ApigeeEnvgroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource ID of the environment group. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee environment group, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Hostnames of the environment group. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#id ApigeeEnvgroup#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource ID of the environment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#name ApigeeEnvgroup#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee environment group, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#org_id ApigeeEnvgroup#org_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#deletion_policy ApigeeEnvgroup#deletion_policy}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Hostnames of the environment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#hostnames ApigeeEnvgroup#hostnames}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#id ApigeeEnvgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupConfig.property.timeouts"></a>

```java
public ApigeeEnvgroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#timeouts ApigeeEnvgroup#timeouts}

---

### ApigeeEnvgroupTimeouts <a name="ApigeeEnvgroupTimeouts" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_envgroup.ApigeeEnvgroupTimeouts;

ApigeeEnvgroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#create ApigeeEnvgroup#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#delete ApigeeEnvgroup#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#update ApigeeEnvgroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#create ApigeeEnvgroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#delete ApigeeEnvgroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_envgroup#update ApigeeEnvgroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvgroupTimeoutsOutputReference <a name="ApigeeEnvgroupTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_envgroup.ApigeeEnvgroupTimeoutsOutputReference;

new ApigeeEnvgroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigeeEnvgroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvgroup.ApigeeEnvgroupTimeouts">ApigeeEnvgroupTimeouts</a>

---



