# `accessContextManagerServicePerimeterResource` Submodule <a name="`accessContextManagerServicePerimeterResource` Submodule" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterResource <a name="AccessContextManagerServicePerimeterResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource google_access_context_manager_service_perimeter_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_resource.AccessContextManagerServicePerimeterResource;

AccessContextManagerServicePerimeterResource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .perimeterName(java.lang.String)
    .resource(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AccessContextManagerServicePerimeterResourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.perimeterName">perimeterName</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.resource">resource</a></code> | <code>java.lang.String</code> | A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#id AccessContextManagerServicePerimeterResource#id}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `perimeterName`<sup>Required</sup> <a name="perimeterName" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.perimeterName"></a>

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#perimeter_name AccessContextManagerServicePerimeterResource#perimeter_name}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.resource"></a>

- *Type:* java.lang.String

A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#resource AccessContextManagerServicePerimeterResource#resource}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#deletion_policy AccessContextManagerServicePerimeterResource#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#id AccessContextManagerServicePerimeterResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#timeouts AccessContextManagerServicePerimeterResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.putTimeouts"></a>

```java
public void putTimeouts(AccessContextManagerServicePerimeterResourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccessContextManagerServicePerimeterResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isConstruct"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_resource.AccessContextManagerServicePerimeterResource;

AccessContextManagerServicePerimeterResource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformElement"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_resource.AccessContextManagerServicePerimeterResource;

AccessContextManagerServicePerimeterResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformResource"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_resource.AccessContextManagerServicePerimeterResource;

AccessContextManagerServicePerimeterResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_resource.AccessContextManagerServicePerimeterResource;

AccessContextManagerServicePerimeterResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessContextManagerServicePerimeterResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AccessContextManagerServicePerimeterResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessContextManagerServicePerimeterResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessContextManagerServicePerimeterResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AccessContextManagerServicePerimeterResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference">AccessContextManagerServicePerimeterResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.perimeterNameInput">perimeterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.perimeterName">perimeterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.timeouts"></a>

```java
public AccessContextManagerServicePerimeterResourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference">AccessContextManagerServicePerimeterResourceTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `perimeterNameInput`<sup>Optional</sup> <a name="perimeterNameInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.perimeterNameInput"></a>

```java
public java.lang.String getPerimeterNameInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.timeoutsInput"></a>

```java
public IResolvable|AccessContextManagerServicePerimeterResourceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `perimeterName`<sup>Required</sup> <a name="perimeterName" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.perimeterName"></a>

```java
public java.lang.String getPerimeterName();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterResourceConfig <a name="AccessContextManagerServicePerimeterResourceConfig" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_resource.AccessContextManagerServicePerimeterResourceConfig;

AccessContextManagerServicePerimeterResourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .perimeterName(java.lang.String)
    .resource(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AccessContextManagerServicePerimeterResourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.perimeterName">perimeterName</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.resource">resource</a></code> | <code>java.lang.String</code> | A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#id AccessContextManagerServicePerimeterResource#id}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `perimeterName`<sup>Required</sup> <a name="perimeterName" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.perimeterName"></a>

```java
public java.lang.String getPerimeterName();
```

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#perimeter_name AccessContextManagerServicePerimeterResource#perimeter_name}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#resource AccessContextManagerServicePerimeterResource#resource}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#deletion_policy AccessContextManagerServicePerimeterResource#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#id AccessContextManagerServicePerimeterResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.timeouts"></a>

```java
public AccessContextManagerServicePerimeterResourceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#timeouts AccessContextManagerServicePerimeterResource#timeouts}

---

### AccessContextManagerServicePerimeterResourceTimeouts <a name="AccessContextManagerServicePerimeterResourceTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_resource.AccessContextManagerServicePerimeterResourceTimeouts;

AccessContextManagerServicePerimeterResourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#create AccessContextManagerServicePerimeterResource#create}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#delete AccessContextManagerServicePerimeterResource#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#create AccessContextManagerServicePerimeterResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/access_context_manager_service_perimeter_resource#delete AccessContextManagerServicePerimeterResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterResourceTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterResourceTimeoutsOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.access_context_manager_service_perimeter_resource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference;

new AccessContextManagerServicePerimeterResourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccessContextManagerServicePerimeterResourceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a>

---



