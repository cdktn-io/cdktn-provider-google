# `dataCatalogPolicyTag` Submodule <a name="`dataCatalogPolicyTag` Submodule" id="@cdktn/provider-google.dataCatalogPolicyTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogPolicyTag <a name="DataCatalogPolicyTag" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag google_data_catalog_policy_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer"></a>

```java
import io.cdktn.providers.google.data_catalog_policy_tag.DataCatalogPolicyTag;

DataCatalogPolicyTag.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .taxonomy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .parentPolicyTag(java.lang.String)
//  .timeouts(DataCatalogPolicyTagTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User defined name of this policy tag. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.taxonomy">taxonomy</a></code> | <code>java.lang.String</code> | Taxonomy the policy tag is associated with. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of this policy tag. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#id DataCatalogPolicyTag#id}. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.parentPolicyTag">parentPolicyTag</a></code> | <code>java.lang.String</code> | Resource name of this policy tag's parent policy tag. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User defined name of this policy tag.

It must: be unique within the parent
taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#display_name DataCatalogPolicyTag#display_name}

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.taxonomy"></a>

- *Type:* java.lang.String

Taxonomy the policy tag is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#taxonomy DataCatalogPolicyTag#taxonomy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of this policy tag.

It must: contain only unicode characters, tabs,
newlines, carriage returns and page breaks; and be at most 2000 bytes long when
encoded in UTF-8. If not set, defaults to an empty description.
If not set, defaults to an empty description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#description DataCatalogPolicyTag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#id DataCatalogPolicyTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentPolicyTag`<sup>Optional</sup> <a name="parentPolicyTag" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.parentPolicyTag"></a>

- *Type:* java.lang.String

Resource name of this policy tag's parent policy tag.

If empty, it means this policy tag is a top level policy tag.
If not set, defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#parent_policy_tag DataCatalogPolicyTag#parent_policy_tag}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#timeouts DataCatalogPolicyTag#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetParentPolicyTag">resetParentPolicyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.putTimeouts"></a>

```java
public void putTimeouts(DataCatalogPolicyTagTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetId"></a>

```java
public void resetId()
```

##### `resetParentPolicyTag` <a name="resetParentPolicyTag" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetParentPolicyTag"></a>

```java
public void resetParentPolicyTag()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCatalogPolicyTag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isConstruct"></a>

```java
import io.cdktn.providers.google.data_catalog_policy_tag.DataCatalogPolicyTag;

DataCatalogPolicyTag.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_catalog_policy_tag.DataCatalogPolicyTag;

DataCatalogPolicyTag.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isTerraformResource"></a>

```java
import io.cdktn.providers.google.data_catalog_policy_tag.DataCatalogPolicyTag;

DataCatalogPolicyTag.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_catalog_policy_tag.DataCatalogPolicyTag;

DataCatalogPolicyTag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCatalogPolicyTag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCatalogPolicyTag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCatalogPolicyTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCatalogPolicyTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCatalogPolicyTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.childPolicyTags">childPolicyTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference">DataCatalogPolicyTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.parentPolicyTagInput">parentPolicyTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.taxonomyInput">taxonomyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.parentPolicyTag">parentPolicyTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.taxonomy">taxonomy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `childPolicyTags`<sup>Required</sup> <a name="childPolicyTags" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.childPolicyTags"></a>

```java
public java.util.List<java.lang.String> getChildPolicyTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.timeouts"></a>

```java
public DataCatalogPolicyTagTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference">DataCatalogPolicyTagTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentPolicyTagInput`<sup>Optional</sup> <a name="parentPolicyTagInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.parentPolicyTagInput"></a>

```java
public java.lang.String getParentPolicyTagInput();
```

- *Type:* java.lang.String

---

##### `taxonomyInput`<sup>Optional</sup> <a name="taxonomyInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.taxonomyInput"></a>

```java
public java.lang.String getTaxonomyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.timeoutsInput"></a>

```java
public IResolvable|DataCatalogPolicyTagTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parentPolicyTag`<sup>Required</sup> <a name="parentPolicyTag" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.parentPolicyTag"></a>

```java
public java.lang.String getParentPolicyTag();
```

- *Type:* java.lang.String

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.taxonomy"></a>

```java
public java.lang.String getTaxonomy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTag.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogPolicyTagConfig <a name="DataCatalogPolicyTagConfig" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_catalog_policy_tag.DataCatalogPolicyTagConfig;

DataCatalogPolicyTagConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .taxonomy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .parentPolicyTag(java.lang.String)
//  .timeouts(DataCatalogPolicyTagTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User defined name of this policy tag. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.taxonomy">taxonomy</a></code> | <code>java.lang.String</code> | Taxonomy the policy tag is associated with. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of this policy tag. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#id DataCatalogPolicyTag#id}. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.parentPolicyTag">parentPolicyTag</a></code> | <code>java.lang.String</code> | Resource name of this policy tag's parent policy tag. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User defined name of this policy tag.

It must: be unique within the parent
taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#display_name DataCatalogPolicyTag#display_name}

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.taxonomy"></a>

```java
public java.lang.String getTaxonomy();
```

- *Type:* java.lang.String

Taxonomy the policy tag is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#taxonomy DataCatalogPolicyTag#taxonomy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of this policy tag.

It must: contain only unicode characters, tabs,
newlines, carriage returns and page breaks; and be at most 2000 bytes long when
encoded in UTF-8. If not set, defaults to an empty description.
If not set, defaults to an empty description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#description DataCatalogPolicyTag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#id DataCatalogPolicyTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentPolicyTag`<sup>Optional</sup> <a name="parentPolicyTag" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.parentPolicyTag"></a>

```java
public java.lang.String getParentPolicyTag();
```

- *Type:* java.lang.String

Resource name of this policy tag's parent policy tag.

If empty, it means this policy tag is a top level policy tag.
If not set, defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#parent_policy_tag DataCatalogPolicyTag#parent_policy_tag}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagConfig.property.timeouts"></a>

```java
public DataCatalogPolicyTagTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#timeouts DataCatalogPolicyTag#timeouts}

---

### DataCatalogPolicyTagTimeouts <a name="DataCatalogPolicyTagTimeouts" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.data_catalog_policy_tag.DataCatalogPolicyTagTimeouts;

DataCatalogPolicyTagTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#create DataCatalogPolicyTag#create}. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#delete DataCatalogPolicyTag#delete}. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#update DataCatalogPolicyTag#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#create DataCatalogPolicyTag#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#delete DataCatalogPolicyTag#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/data_catalog_policy_tag#update DataCatalogPolicyTag#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogPolicyTagTimeoutsOutputReference <a name="DataCatalogPolicyTagTimeoutsOutputReference" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_catalog_policy_tag.DataCatalogPolicyTagTimeoutsOutputReference;

new DataCatalogPolicyTagTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCatalogPolicyTagTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataCatalogPolicyTag.DataCatalogPolicyTagTimeouts">DataCatalogPolicyTagTimeouts</a>

---



