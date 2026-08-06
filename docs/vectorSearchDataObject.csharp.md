# `vectorSearchDataObject` Submodule <a name="`vectorSearchDataObject` Submodule" id="@cdktn/provider-google.vectorSearchDataObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchDataObject <a name="VectorSearchDataObject" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object google_vector_search_data_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObject(Construct Scope, string Id, VectorSearchDataObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig">VectorSearchDataObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig">VectorSearchDataObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors">PutVectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetVectors">ResetVectors</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts"></a>

```csharp
private void PutTimeouts(VectorSearchDataObjectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

---

##### `PutVectors` <a name="PutVectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors"></a>

```csharp
private void PutVectors(IResolvable|VectorSearchDataObjectVectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>[]

---

##### `ResetData` <a name="ResetData" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVectors` <a name="ResetVectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetVectors"></a>

```csharp
private void ResetVectors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VectorSearchDataObject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VectorSearchDataObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VectorSearchDataObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VectorSearchDataObject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VectorSearchDataObject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VectorSearchDataObject resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VectorSearchDataObject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VectorSearchDataObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchDataObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference">VectorSearchDataObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectors">Vectors</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList">VectorSearchDataObjectVectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectIdInput">DataObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectorsInput">VectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectId">DataObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeouts"></a>

```csharp
public VectorSearchDataObjectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference">VectorSearchDataObjectTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Vectors`<sup>Required</sup> <a name="Vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectors"></a>

```csharp
public VectorSearchDataObjectVectorsList Vectors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList">VectorSearchDataObjectVectorsList</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `DataObjectIdInput`<sup>Optional</sup> <a name="DataObjectIdInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectIdInput"></a>

```csharp
public string DataObjectIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeoutsInput"></a>

```csharp
public IResolvable|VectorSearchDataObjectTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

---

##### `VectorsInput`<sup>Optional</sup> <a name="VectorsInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectorsInput"></a>

```csharp
public IResolvable|VectorSearchDataObjectVectors[] VectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `DataObjectId`<sup>Required</sup> <a name="DataObjectId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectId"></a>

```csharp
public string DataObjectId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchDataObjectConfig <a name="VectorSearchDataObjectConfig" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CollectionId,
    string DataObjectId,
    string Location,
    string Data = null,
    string DeletionPolicy = null,
    string Etag = null,
    string Id = null,
    string Project = null,
    VectorSearchDataObjectTimeouts Timeouts = null,
    IResolvable|VectorSearchDataObjectVectors[] Vectors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dataObjectId">DataObjectId</a></code> | <code>string</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.data">Data</a></code> | <code>string</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.etag">Etag</a></code> | <code>string</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.vectors">Vectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>[]</code> | vectors block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#collection_id VectorSearchDataObject#collection_id}

---

##### `DataObjectId`<sup>Required</sup> <a name="DataObjectId" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dataObjectId"></a>

```csharp
public string DataObjectId { get; set; }
```

- *Type:* string

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#data_object_id VectorSearchDataObject#data_object_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#location VectorSearchDataObject#location}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#data VectorSearchDataObject#data}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#deletion_policy VectorSearchDataObject#deletion_policy}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#etag VectorSearchDataObject#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.timeouts"></a>

```csharp
public VectorSearchDataObjectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#timeouts VectorSearchDataObject#timeouts}

---

##### `Vectors`<sup>Optional</sup> <a name="Vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.vectors"></a>

```csharp
public IResolvable|VectorSearchDataObjectVectors[] Vectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>[]

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#vectors VectorSearchDataObject#vectors}

---

### VectorSearchDataObjectTimeouts <a name="VectorSearchDataObjectTimeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#create VectorSearchDataObject#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#delete VectorSearchDataObject#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#update VectorSearchDataObject#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#create VectorSearchDataObject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#delete VectorSearchDataObject#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#update VectorSearchDataObject#update}.

---

### VectorSearchDataObjectVectors <a name="VectorSearchDataObjectVectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectVectors {
    string FieldName,
    VectorSearchDataObjectVectorsDense Dense = null,
    VectorSearchDataObjectVectorsSparse Sparse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.fieldName">FieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#field_name VectorSearchDataObject#field_name}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.dense">Dense</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | dense block. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.sparse">Sparse</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | sparse block. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#field_name VectorSearchDataObject#field_name}.

---

##### `Dense`<sup>Optional</sup> <a name="Dense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.dense"></a>

```csharp
public VectorSearchDataObjectVectorsDense Dense { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

dense block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#dense VectorSearchDataObject#dense}

---

##### `Sparse`<sup>Optional</sup> <a name="Sparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.sparse"></a>

```csharp
public VectorSearchDataObjectVectorsSparse Sparse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

sparse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#sparse VectorSearchDataObject#sparse}

---

### VectorSearchDataObjectVectorsDense <a name="VectorSearchDataObjectVectorsDense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectVectorsDense {
    double[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.property.values">Values</a></code> | <code>double[]</code> | The float values of the dense vector. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#values VectorSearchDataObject#values}

---

### VectorSearchDataObjectVectorsSparse <a name="VectorSearchDataObjectVectorsSparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectVectorsSparse {
    double[] Indices,
    double[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.indices">Indices</a></code> | <code>double[]</code> | The indices corresponding to the entries in 'values'. Must have the same length as 'values'. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.values">Values</a></code> | <code>double[]</code> | The non-zero float values of the sparse vector. |

---

##### `Indices`<sup>Required</sup> <a name="Indices" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.indices"></a>

```csharp
public double[] Indices { get; set; }
```

- *Type:* double[]

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#indices VectorSearchDataObject#indices}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/vector_search_data_object#values VectorSearchDataObject#values}

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchDataObjectTimeoutsOutputReference <a name="VectorSearchDataObjectTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VectorSearchDataObjectTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

---


### VectorSearchDataObjectVectorsDenseOutputReference <a name="VectorSearchDataObjectVectorsDenseOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectVectorsDenseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.internalValue"></a>

```csharp
public VectorSearchDataObjectVectorsDense InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

---


### VectorSearchDataObjectVectorsList <a name="VectorSearchDataObjectVectorsList" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectVectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get"></a>

```csharp
private VectorSearchDataObjectVectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.internalValue"></a>

```csharp
public IResolvable|VectorSearchDataObjectVectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>[]

---


### VectorSearchDataObjectVectorsOutputReference <a name="VectorSearchDataObjectVectorsOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectVectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense">PutDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse">PutSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetDense">ResetDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetSparse">ResetSparse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDense` <a name="PutDense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense"></a>

```csharp
private void PutDense(VectorSearchDataObjectVectorsDense Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

---

##### `PutSparse` <a name="PutSparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse"></a>

```csharp
private void PutSparse(VectorSearchDataObjectVectorsSparse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

---

##### `ResetDense` <a name="ResetDense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetDense"></a>

```csharp
private void ResetDense()
```

##### `ResetSparse` <a name="ResetSparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetSparse"></a>

```csharp
private void ResetSparse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.dense">Dense</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference">VectorSearchDataObjectVectorsDenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparse">Sparse</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference">VectorSearchDataObjectVectorsSparseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.denseInput">DenseInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparseInput">SparseInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dense`<sup>Required</sup> <a name="Dense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.dense"></a>

```csharp
public VectorSearchDataObjectVectorsDenseOutputReference Dense { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference">VectorSearchDataObjectVectorsDenseOutputReference</a>

---

##### `Sparse`<sup>Required</sup> <a name="Sparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparse"></a>

```csharp
public VectorSearchDataObjectVectorsSparseOutputReference Sparse { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference">VectorSearchDataObjectVectorsSparseOutputReference</a>

---

##### `DenseInput`<sup>Optional</sup> <a name="DenseInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.denseInput"></a>

```csharp
public VectorSearchDataObjectVectorsDense DenseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `SparseInput`<sup>Optional</sup> <a name="SparseInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparseInput"></a>

```csharp
public VectorSearchDataObjectVectorsSparse SparseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VectorSearchDataObjectVectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>

---


### VectorSearchDataObjectVectorsSparseOutputReference <a name="VectorSearchDataObjectVectorsSparseOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VectorSearchDataObjectVectorsSparseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput">IndicesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indices">Indices</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndicesInput`<sup>Optional</sup> <a name="IndicesInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput"></a>

```csharp
public double[] IndicesInput { get; }
```

- *Type:* double[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Indices`<sup>Required</sup> <a name="Indices" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indices"></a>

```csharp
public double[] Indices { get; }
```

- *Type:* double[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.internalValue"></a>

```csharp
public VectorSearchDataObjectVectorsSparse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

---



