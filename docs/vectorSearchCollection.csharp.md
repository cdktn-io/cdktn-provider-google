# `vectorSearchCollection` Submodule <a name="`vectorSearchCollection` Submodule" id="@cdktn/provider-google.vectorSearchCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchCollection <a name="VectorSearchCollection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection google_vector_search_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollection(Construct Scope, string Id, VectorSearchCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig">VectorSearchCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig">VectorSearchCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema">PutVectorSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDataSchema">ResetDataSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetVectorSchema">ResetVectorSchema</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VectorSearchCollectionEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts"></a>

```csharp
private void PutTimeouts(VectorSearchCollectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---

##### `PutVectorSchema` <a name="PutVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema"></a>

```csharp
private void PutVectorSchema(IResolvable|VectorSearchCollectionVectorSchema[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]

---

##### `ResetDataSchema` <a name="ResetDataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDataSchema"></a>

```csharp
private void ResetDataSchema()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVectorSchema` <a name="ResetVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetVectorSchema"></a>

```csharp
private void ResetVectorSchema()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VectorSearchCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VectorSearchCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VectorSearchCollection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VectorSearchCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VectorSearchCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VectorSearchCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference">VectorSearchCollectionEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference">VectorSearchCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchema">VectorSchema</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList">VectorSearchCollectionVectorSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchemaInput">DataSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchemaInput">VectorSchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchema">DataSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpec"></a>

```csharp
public VectorSearchCollectionEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference">VectorSearchCollectionEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeouts"></a>

```csharp
public VectorSearchCollectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference">VectorSearchCollectionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VectorSchema`<sup>Required</sup> <a name="VectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchema"></a>

```csharp
public VectorSearchCollectionVectorSchemaList VectorSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList">VectorSearchCollectionVectorSchemaList</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `DataSchemaInput`<sup>Optional</sup> <a name="DataSchemaInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchemaInput"></a>

```csharp
public string DataSchemaInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpecInput"></a>

```csharp
public VectorSearchCollectionEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeoutsInput"></a>

```csharp
public IResolvable|VectorSearchCollectionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---

##### `VectorSchemaInput`<sup>Optional</sup> <a name="VectorSchemaInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchemaInput"></a>

```csharp
public IResolvable|VectorSearchCollectionVectorSchema[] VectorSchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `DataSchema`<sup>Required</sup> <a name="DataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchema"></a>

```csharp
public string DataSchema { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchCollectionConfig <a name="VectorSearchCollectionConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CollectionId,
    string Location,
    string DataSchema = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    VectorSearchCollectionEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    VectorSearchCollectionTimeouts Timeouts = null,
    IResolvable|VectorSearchCollectionVectorSchema[] VectorSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | ID of the Collection to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dataSchema">DataSchema</a></code> | <code>string</code> | JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.description">Description</a></code> | <code>string</code> | User-specified description of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-specified display name of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.vectorSchema">VectorSchema</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]</code> | vector_schema block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

ID of the Collection to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#collection_id VectorSearchCollection#collection_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#location VectorSearchCollection#location}

---

##### `DataSchema`<sup>Optional</sup> <a name="DataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dataSchema"></a>

```csharp
public string DataSchema { get; set; }
```

- *Type:* string

JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#data_schema VectorSearchCollection#data_schema}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#deletion_policy VectorSearchCollection#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-specified description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#description VectorSearchCollection#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-specified display name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#display_name VectorSearchCollection#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.encryptionSpec"></a>

```csharp
public VectorSearchCollectionEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#encryption_spec VectorSearchCollection#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#labels VectorSearchCollection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.timeouts"></a>

```csharp
public VectorSearchCollectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#timeouts VectorSearchCollection#timeouts}

---

##### `VectorSchema`<sup>Optional</sup> <a name="VectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.vectorSchema"></a>

```csharp
public IResolvable|VectorSearchCollectionVectorSchema[] VectorSchema { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]

vector_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#vector_schema VectorSearchCollection#vector_schema}

---

### VectorSearchCollectionEncryptionSpec <a name="VectorSearchCollectionEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionEncryptionSpec {
    string CryptoKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.property.cryptoKeyName">CryptoKeyName</a></code> | <code>string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `CryptoKeyName`<sup>Required</sup> <a name="CryptoKeyName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.property.cryptoKeyName"></a>

```csharp
public string CryptoKeyName { get; set; }
```

- *Type:* string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#crypto_key_name VectorSearchCollection#crypto_key_name}

---

### VectorSearchCollectionTimeouts <a name="VectorSearchCollectionTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}.

---

### VectorSearchCollectionVectorSchema <a name="VectorSearchCollectionVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchema {
    string FieldName,
    VectorSearchCollectionVectorSchemaDenseVector DenseVector = null,
    VectorSearchCollectionVectorSchemaSparseVector SparseVector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.fieldName">FieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.denseVector">DenseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | dense_vector block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.sparseVector">SparseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | sparse_vector block. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}.

---

##### `DenseVector`<sup>Optional</sup> <a name="DenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.denseVector"></a>

```csharp
public VectorSearchCollectionVectorSchemaDenseVector DenseVector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

dense_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#dense_vector VectorSearchCollection#dense_vector}

---

##### `SparseVector`<sup>Optional</sup> <a name="SparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.sparseVector"></a>

```csharp
public VectorSearchCollectionVectorSchemaSparseVector SparseVector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

sparse_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#sparse_vector VectorSearchCollection#sparse_vector}

---

### VectorSearchCollectionVectorSchemaDenseVector <a name="VectorSearchCollectionVectorSchemaDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchemaDenseVector {
    double Dimensions = null,
    VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig VertexEmbeddingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.dimensions">Dimensions</a></code> | <code>double</code> | Dimensionality of the vector field. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig">VertexEmbeddingConfig</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | vertex_embedding_config block. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.dimensions"></a>

```csharp
public double Dimensions { get; set; }
```

- *Type:* double

Dimensionality of the vector field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#dimensions VectorSearchCollection#dimensions}

---

##### `VertexEmbeddingConfig`<sup>Optional</sup> <a name="VertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig"></a>

```csharp
public VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig VertexEmbeddingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

vertex_embedding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#vertex_embedding_config VectorSearchCollection#vertex_embedding_config}

---

### VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig <a name="VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig {
    string ModelId,
    string TaskType,
    string TextTemplate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId">ModelId</a></code> | <code>string</code> | Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType">TaskType</a></code> | <code>string</code> | Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate">TextTemplate</a></code> | <code>string</code> | Required: Text template for the input to the model. |

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#model_id VectorSearchCollection#model_id}

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#task_type VectorSearchCollection#task_type}

---

##### `TextTemplate`<sup>Required</sup> <a name="TextTemplate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate"></a>

```csharp
public string TextTemplate { get; set; }
```

- *Type:* string

Required: Text template for the input to the model.

The template must
contain one or more references to fields in the DataObject, e.g.:
"Movie Title: {title} ---- Movie Plot: {plot}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_collection#text_template VectorSearchCollection#text_template}

---

### VectorSearchCollectionVectorSchemaSparseVector <a name="VectorSearchCollectionVectorSchemaSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchemaSparseVector {

};
```


## Classes <a name="Classes" id="Classes"></a>

### VectorSearchCollectionEncryptionSpecOutputReference <a name="VectorSearchCollectionEncryptionSpecOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput">CryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName">CryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CryptoKeyNameInput`<sup>Optional</sup> <a name="CryptoKeyNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput"></a>

```csharp
public string CryptoKeyNameInput { get; }
```

- *Type:* string

---

##### `CryptoKeyName`<sup>Required</sup> <a name="CryptoKeyName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName"></a>

```csharp
public string CryptoKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VectorSearchCollectionEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---


### VectorSearchCollectionTimeoutsOutputReference <a name="VectorSearchCollectionTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VectorSearchCollectionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---


### VectorSearchCollectionVectorSchemaDenseVectorOutputReference <a name="VectorSearchCollectionVectorSchemaDenseVectorOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchemaDenseVectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig">PutVertexEmbeddingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig">ResetVertexEmbeddingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVertexEmbeddingConfig` <a name="PutVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig"></a>

```csharp
private void PutVertexEmbeddingConfig(VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetVertexEmbeddingConfig` <a name="ResetVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig"></a>

```csharp
private void ResetVertexEmbeddingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig">VertexEmbeddingConfig</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput">VertexEmbeddingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions">Dimensions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VertexEmbeddingConfig`<sup>Required</sup> <a name="VertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig"></a>

```csharp
public VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference VertexEmbeddingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput"></a>

```csharp
public double DimensionsInput { get; }
```

- *Type:* double

---

##### `VertexEmbeddingConfigInput`<sup>Optional</sup> <a name="VertexEmbeddingConfigInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput"></a>

```csharp
public VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig VertexEmbeddingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions"></a>

```csharp
public double Dimensions { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue"></a>

```csharp
public VectorSearchCollectionVectorSchemaDenseVector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---


### VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference <a name="VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput">TextTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate">TextTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `TextTemplateInput`<sup>Optional</sup> <a name="TextTemplateInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput"></a>

```csharp
public string TextTemplateInput { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `TextTemplate`<sup>Required</sup> <a name="TextTemplate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate"></a>

```csharp
public string TextTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue"></a>

```csharp
public VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---


### VectorSearchCollectionVectorSchemaList <a name="VectorSearchCollectionVectorSchemaList" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchemaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get"></a>

```csharp
private VectorSearchCollectionVectorSchemaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.internalValue"></a>

```csharp
public IResolvable|VectorSearchCollectionVectorSchema[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]

---


### VectorSearchCollectionVectorSchemaOutputReference <a name="VectorSearchCollectionVectorSchemaOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector">PutDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector">PutSparseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetDenseVector">ResetDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetSparseVector">ResetSparseVector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDenseVector` <a name="PutDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector"></a>

```csharp
private void PutDenseVector(VectorSearchCollectionVectorSchemaDenseVector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---

##### `PutSparseVector` <a name="PutSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector"></a>

```csharp
private void PutSparseVector(VectorSearchCollectionVectorSchemaSparseVector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---

##### `ResetDenseVector` <a name="ResetDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetDenseVector"></a>

```csharp
private void ResetDenseVector()
```

##### `ResetSparseVector` <a name="ResetSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetSparseVector"></a>

```csharp
private void ResetSparseVector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVector">DenseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference">VectorSearchCollectionVectorSchemaDenseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVector">SparseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference">VectorSearchCollectionVectorSchemaSparseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput">DenseVectorInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput">SparseVectorInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DenseVector`<sup>Required</sup> <a name="DenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVector"></a>

```csharp
public VectorSearchCollectionVectorSchemaDenseVectorOutputReference DenseVector { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference">VectorSearchCollectionVectorSchemaDenseVectorOutputReference</a>

---

##### `SparseVector`<sup>Required</sup> <a name="SparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVector"></a>

```csharp
public VectorSearchCollectionVectorSchemaSparseVectorOutputReference SparseVector { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference">VectorSearchCollectionVectorSchemaSparseVectorOutputReference</a>

---

##### `DenseVectorInput`<sup>Optional</sup> <a name="DenseVectorInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput"></a>

```csharp
public VectorSearchCollectionVectorSchemaDenseVector DenseVectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `SparseVectorInput`<sup>Optional</sup> <a name="SparseVectorInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput"></a>

```csharp
public VectorSearchCollectionVectorSchemaSparseVector SparseVectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VectorSearchCollectionVectorSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>

---


### VectorSearchCollectionVectorSchemaSparseVectorOutputReference <a name="VectorSearchCollectionVectorSchemaSparseVectorOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchCollectionVectorSchemaSparseVectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue"></a>

```csharp
public VectorSearchCollectionVectorSchemaSparseVector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---



