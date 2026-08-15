# `chronicleCustomList` Submodule <a name="`chronicleCustomList` Submodule" id="@cdktn/provider-google.chronicleCustomList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleCustomList <a name="ChronicleCustomList" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list google_chronicle_custom_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_custom_list.ChronicleCustomList;

ChronicleCustomList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .category(java.lang.String)
    .entityIdentifier(java.lang.String)
    .environments(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ChronicleCustomListTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | The value of the custom list. Maximum length: 1024 characters. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.entityIdentifier">entityIdentifier</a></code> | <code>java.lang.String</code> | The key of the custom list. Maximum length: 2048 characters. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.environments">environments</a></code> | <code>java.lang.String</code> | The environments to which the custom list is associated. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#id ChronicleCustomList#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#project ChronicleCustomList#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.category"></a>

- *Type:* java.lang.String

The value of the custom list. Maximum length: 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#category ChronicleCustomList#category}

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.entityIdentifier"></a>

- *Type:* java.lang.String

The key of the custom list. Maximum length: 2048 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#entity_identifier ChronicleCustomList#entity_identifier}

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.environments"></a>

- *Type:* java.lang.String

The environments to which the custom list is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#environments ChronicleCustomList#environments}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#instance ChronicleCustomList#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#location ChronicleCustomList#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#deletion_policy ChronicleCustomList#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#id ChronicleCustomList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#project ChronicleCustomList#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#timeouts ChronicleCustomList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.putTimeouts"></a>

```java
public void putTimeouts(ChronicleCustomListTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleCustomList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isConstruct"></a>

```java
import io.cdktn.providers.google.chronicle_custom_list.ChronicleCustomList;

ChronicleCustomList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isTerraformElement"></a>

```java
import io.cdktn.providers.google.chronicle_custom_list.ChronicleCustomList;

ChronicleCustomList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isTerraformResource"></a>

```java
import io.cdktn.providers.google.chronicle_custom_list.ChronicleCustomList;

ChronicleCustomList.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.chronicle_custom_list.ChronicleCustomList;

ChronicleCustomList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleCustomList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChronicleCustomList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleCustomList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleCustomList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleCustomList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.customListId">customListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference">ChronicleCustomListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.entityIdentifierInput">entityIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.environmentsInput">environmentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.entityIdentifier">entityIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.environments">environments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customListId`<sup>Required</sup> <a name="customListId" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.customListId"></a>

```java
public java.lang.String getCustomListId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.timeouts"></a>

```java
public ChronicleCustomListTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference">ChronicleCustomListTimeoutsOutputReference</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `entityIdentifierInput`<sup>Optional</sup> <a name="entityIdentifierInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.entityIdentifierInput"></a>

```java
public java.lang.String getEntityIdentifierInput();
```

- *Type:* java.lang.String

---

##### `environmentsInput`<sup>Optional</sup> <a name="environmentsInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.environmentsInput"></a>

```java
public java.lang.String getEnvironmentsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.timeoutsInput"></a>

```java
public IResolvable|ChronicleCustomListTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.entityIdentifier"></a>

```java
public java.lang.String getEntityIdentifier();
```

- *Type:* java.lang.String

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.environments"></a>

```java
public java.lang.String getEnvironments();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleCustomListConfig <a name="ChronicleCustomListConfig" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_custom_list.ChronicleCustomListConfig;

ChronicleCustomListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .category(java.lang.String)
    .entityIdentifier(java.lang.String)
    .environments(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ChronicleCustomListTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.category">category</a></code> | <code>java.lang.String</code> | The value of the custom list. Maximum length: 1024 characters. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.entityIdentifier">entityIdentifier</a></code> | <code>java.lang.String</code> | The key of the custom list. Maximum length: 2048 characters. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.environments">environments</a></code> | <code>java.lang.String</code> | The environments to which the custom list is associated. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#id ChronicleCustomList#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#project ChronicleCustomList#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The value of the custom list. Maximum length: 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#category ChronicleCustomList#category}

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.entityIdentifier"></a>

```java
public java.lang.String getEntityIdentifier();
```

- *Type:* java.lang.String

The key of the custom list. Maximum length: 2048 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#entity_identifier ChronicleCustomList#entity_identifier}

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.environments"></a>

```java
public java.lang.String getEnvironments();
```

- *Type:* java.lang.String

The environments to which the custom list is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#environments ChronicleCustomList#environments}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#instance ChronicleCustomList#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#location ChronicleCustomList#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#deletion_policy ChronicleCustomList#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#id ChronicleCustomList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#project ChronicleCustomList#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListConfig.property.timeouts"></a>

```java
public ChronicleCustomListTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#timeouts ChronicleCustomList#timeouts}

---

### ChronicleCustomListTimeouts <a name="ChronicleCustomListTimeouts" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_custom_list.ChronicleCustomListTimeouts;

ChronicleCustomListTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#create ChronicleCustomList#create}. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#delete ChronicleCustomList#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#update ChronicleCustomList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#create ChronicleCustomList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#delete ChronicleCustomList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_custom_list#update ChronicleCustomList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleCustomListTimeoutsOutputReference <a name="ChronicleCustomListTimeoutsOutputReference" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_custom_list.ChronicleCustomListTimeoutsOutputReference;

new ChronicleCustomListTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleCustomListTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleCustomList.ChronicleCustomListTimeouts">ChronicleCustomListTimeouts</a>

---



