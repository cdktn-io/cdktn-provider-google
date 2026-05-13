# `apphubWorkload` Submodule <a name="`apphubWorkload` Submodule" id="@cdktn/provider-google.apphubWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApphubWorkload <a name="ApphubWorkload" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload google_apphub_workload}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkload(Construct Scope, string Id, ApphubWorkloadConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig">ApphubWorkloadConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig">ApphubWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.putAttributes"></a>

```csharp
private void PutAttributes(ApphubWorkloadAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.putTimeouts"></a>

```csharp
private void PutTimeouts(ApphubWorkloadTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApphubWorkload resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApphubWorkload.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApphubWorkload.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApphubWorkload.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApphubWorkload.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApphubWorkload resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApphubWorkload to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApphubWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApphubWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference">ApphubWorkloadAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference">ApphubWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.workloadProperties">WorkloadProperties</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList">ApphubWorkloadWorkloadPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.workloadReference">WorkloadReference</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList">ApphubWorkloadWorkloadReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.attributesInput">AttributesInput</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkloadInput">DiscoveredWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.workloadIdInput">WorkloadIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkload">DiscoveredWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.workloadId">WorkloadId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.attributes"></a>

```csharp
public ApphubWorkloadAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference">ApphubWorkloadAttributesOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.timeouts"></a>

```csharp
public ApphubWorkloadTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference">ApphubWorkloadTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkloadProperties`<sup>Required</sup> <a name="WorkloadProperties" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.workloadProperties"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesList WorkloadProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList">ApphubWorkloadWorkloadPropertiesList</a>

---

##### `WorkloadReference`<sup>Required</sup> <a name="WorkloadReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.workloadReference"></a>

```csharp
public ApphubWorkloadWorkloadReferenceList WorkloadReference { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList">ApphubWorkloadWorkloadReferenceList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.attributesInput"></a>

```csharp
public ApphubWorkloadAttributes AttributesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscoveredWorkloadInput`<sup>Optional</sup> <a name="DiscoveredWorkloadInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkloadInput"></a>

```csharp
public string DiscoveredWorkloadInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.timeoutsInput"></a>

```csharp
public IResolvable|ApphubWorkloadTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>

---

##### `WorkloadIdInput`<sup>Optional</sup> <a name="WorkloadIdInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.workloadIdInput"></a>

```csharp
public string WorkloadIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscoveredWorkload`<sup>Required</sup> <a name="DiscoveredWorkload" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkload"></a>

```csharp
public string DiscoveredWorkload { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadId`<sup>Required</sup> <a name="WorkloadId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.workloadId"></a>

```csharp
public string WorkloadId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apphubWorkload.ApphubWorkload.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApphubWorkloadAttributes <a name="ApphubWorkloadAttributes" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributes {
    IResolvable|ApphubWorkloadAttributesBusinessOwners[] BusinessOwners = null,
    ApphubWorkloadAttributesCriticality Criticality = null,
    IResolvable|ApphubWorkloadAttributesDeveloperOwners[] DeveloperOwners = null,
    ApphubWorkloadAttributesEnvironment Environment = null,
    IResolvable|ApphubWorkloadAttributesOperatorOwners[] OperatorOwners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.businessOwners">BusinessOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>[]</code> | business_owners block. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.criticality">Criticality</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.developerOwners">DeveloperOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>[]</code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.operatorOwners">OperatorOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>[]</code> | operator_owners block. |

---

##### `BusinessOwners`<sup>Optional</sup> <a name="BusinessOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.businessOwners"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesBusinessOwners[] BusinessOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>[]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#business_owners ApphubWorkload#business_owners}

---

##### `Criticality`<sup>Optional</sup> <a name="Criticality" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.criticality"></a>

```csharp
public ApphubWorkloadAttributesCriticality Criticality { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#criticality ApphubWorkload#criticality}

---

##### `DeveloperOwners`<sup>Optional</sup> <a name="DeveloperOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.developerOwners"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesDeveloperOwners[] DeveloperOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>[]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#developer_owners ApphubWorkload#developer_owners}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.environment"></a>

```csharp
public ApphubWorkloadAttributesEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#environment ApphubWorkload#environment}

---

##### `OperatorOwners`<sup>Optional</sup> <a name="OperatorOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.operatorOwners"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesOperatorOwners[] OperatorOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>[]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#operator_owners ApphubWorkload#operator_owners}

---

### ApphubWorkloadAttributesBusinessOwners <a name="ApphubWorkloadAttributesBusinessOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesBusinessOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contacts. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadAttributesCriticality <a name="ApphubWorkloadAttributesCriticality" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesCriticality {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.property.type">Type</a></code> | <code>string</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#type ApphubWorkload#type}

---

### ApphubWorkloadAttributesDeveloperOwners <a name="ApphubWorkloadAttributesDeveloperOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesDeveloperOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contacts. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadAttributesEnvironment <a name="ApphubWorkloadAttributesEnvironment" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesEnvironment {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.property.type">Type</a></code> | <code>string</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#type ApphubWorkload#type}

---

### ApphubWorkloadAttributesOperatorOwners <a name="ApphubWorkloadAttributesOperatorOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesOperatorOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contacts. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadConfig <a name="ApphubWorkloadConfig" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string DiscoveredWorkload,
    string Location,
    string WorkloadId,
    ApphubWorkloadAttributes Attributes = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    ApphubWorkloadTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.discoveredWorkload">DiscoveredWorkload</a></code> | <code>string</code> | Immutable. The resource name of the original discovered workload. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.location">Location</a></code> | <code>string</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.workloadId">WorkloadId</a></code> | <code>string</code> | The Workload identifier. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.description">Description</a></code> | <code>string</code> | User-defined description of a Workload. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-defined name for the Workload. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#id ApphubWorkload#id}. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#project ApphubWorkload#project}. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#application_id ApphubWorkload#application_id}

---

##### `DiscoveredWorkload`<sup>Required</sup> <a name="DiscoveredWorkload" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.discoveredWorkload"></a>

```csharp
public string DiscoveredWorkload { get; set; }
```

- *Type:* string

Immutable. The resource name of the original discovered workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#discovered_workload ApphubWorkload#discovered_workload}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#location ApphubWorkload#location}

---

##### `WorkloadId`<sup>Required</sup> <a name="WorkloadId" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.workloadId"></a>

```csharp
public string WorkloadId { get; set; }
```

- *Type:* string

The Workload identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#workload_id ApphubWorkload#workload_id}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.attributes"></a>

```csharp
public ApphubWorkloadAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#attributes ApphubWorkload#attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-defined description of a Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#description ApphubWorkload#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-defined name for the Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#id ApphubWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#project ApphubWorkload#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadConfig.property.timeouts"></a>

```csharp
public ApphubWorkloadTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#timeouts ApphubWorkload#timeouts}

---

### ApphubWorkloadTimeouts <a name="ApphubWorkloadTimeouts" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#create ApphubWorkload#create}. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#delete ApphubWorkload#delete}. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#update ApphubWorkload#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#create ApphubWorkload#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#delete ApphubWorkload#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/apphub_workload#update ApphubWorkload#update}.

---

### ApphubWorkloadWorkloadProperties <a name="ApphubWorkloadWorkloadProperties" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadProperties {

};
```


### ApphubWorkloadWorkloadPropertiesExtendedMetadata <a name="ApphubWorkloadWorkloadPropertiesExtendedMetadata" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesExtendedMetadata {

};
```


### ApphubWorkloadWorkloadPropertiesExtendedMetadataValue <a name="ApphubWorkloadWorkloadPropertiesExtendedMetadataValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesExtendedMetadataValue {

};
```


### ApphubWorkloadWorkloadPropertiesFunctionalType <a name="ApphubWorkloadWorkloadPropertiesFunctionalType" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesFunctionalType {

};
```


### ApphubWorkloadWorkloadPropertiesIdentity <a name="ApphubWorkloadWorkloadPropertiesIdentity" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesIdentity {

};
```


### ApphubWorkloadWorkloadReference <a name="ApphubWorkloadWorkloadReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadReference {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ApphubWorkloadAttributesBusinessOwnersList <a name="ApphubWorkloadAttributesBusinessOwnersList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesBusinessOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get"></a>

```csharp
private ApphubWorkloadAttributesBusinessOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.internalValue"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesBusinessOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>[]

---


### ApphubWorkloadAttributesBusinessOwnersOutputReference <a name="ApphubWorkloadAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesBusinessOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesBusinessOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>

---


### ApphubWorkloadAttributesCriticalityOutputReference <a name="ApphubWorkloadAttributesCriticalityOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesCriticalityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadAttributesCriticality InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

---


### ApphubWorkloadAttributesDeveloperOwnersList <a name="ApphubWorkloadAttributesDeveloperOwnersList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesDeveloperOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get"></a>

```csharp
private ApphubWorkloadAttributesDeveloperOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.internalValue"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesDeveloperOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>[]

---


### ApphubWorkloadAttributesDeveloperOwnersOutputReference <a name="ApphubWorkloadAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesDeveloperOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesDeveloperOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>

---


### ApphubWorkloadAttributesEnvironmentOutputReference <a name="ApphubWorkloadAttributesEnvironmentOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadAttributesEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

---


### ApphubWorkloadAttributesOperatorOwnersList <a name="ApphubWorkloadAttributesOperatorOwnersList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesOperatorOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get"></a>

```csharp
private ApphubWorkloadAttributesOperatorOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.internalValue"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesOperatorOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>[]

---


### ApphubWorkloadAttributesOperatorOwnersOutputReference <a name="ApphubWorkloadAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesOperatorOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesOperatorOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>

---


### ApphubWorkloadAttributesOutputReference <a name="ApphubWorkloadAttributesOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners">PutBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality">PutCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners">PutDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners">PutOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetBusinessOwners">ResetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetCriticality">ResetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetDeveloperOwners">ResetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetOperatorOwners">ResetOperatorOwners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBusinessOwners` <a name="PutBusinessOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners"></a>

```csharp
private void PutBusinessOwners(IResolvable|ApphubWorkloadAttributesBusinessOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>[]

---

##### `PutCriticality` <a name="PutCriticality" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality"></a>

```csharp
private void PutCriticality(ApphubWorkloadAttributesCriticality Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

---

##### `PutDeveloperOwners` <a name="PutDeveloperOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners"></a>

```csharp
private void PutDeveloperOwners(IResolvable|ApphubWorkloadAttributesDeveloperOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>[]

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment"></a>

```csharp
private void PutEnvironment(ApphubWorkloadAttributesEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

---

##### `PutOperatorOwners` <a name="PutOperatorOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners"></a>

```csharp
private void PutOperatorOwners(IResolvable|ApphubWorkloadAttributesOperatorOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>[]

---

##### `ResetBusinessOwners` <a name="ResetBusinessOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetBusinessOwners"></a>

```csharp
private void ResetBusinessOwners()
```

##### `ResetCriticality` <a name="ResetCriticality" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetCriticality"></a>

```csharp
private void ResetCriticality()
```

##### `ResetDeveloperOwners` <a name="ResetDeveloperOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetDeveloperOwners"></a>

```csharp
private void ResetDeveloperOwners()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetOperatorOwners` <a name="ResetOperatorOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetOperatorOwners"></a>

```csharp
private void ResetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwners">BusinessOwners</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList">ApphubWorkloadAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticality">Criticality</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference">ApphubWorkloadAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwners">DeveloperOwners</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList">ApphubWorkloadAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference">ApphubWorkloadAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwners">OperatorOwners</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList">ApphubWorkloadAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwnersInput">BusinessOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticalityInput">CriticalityInput</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwnersInput">DeveloperOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwnersInput">OperatorOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BusinessOwners`<sup>Required</sup> <a name="BusinessOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwners"></a>

```csharp
public ApphubWorkloadAttributesBusinessOwnersList BusinessOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList">ApphubWorkloadAttributesBusinessOwnersList</a>

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticality"></a>

```csharp
public ApphubWorkloadAttributesCriticalityOutputReference Criticality { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference">ApphubWorkloadAttributesCriticalityOutputReference</a>

---

##### `DeveloperOwners`<sup>Required</sup> <a name="DeveloperOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwners"></a>

```csharp
public ApphubWorkloadAttributesDeveloperOwnersList DeveloperOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList">ApphubWorkloadAttributesDeveloperOwnersList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environment"></a>

```csharp
public ApphubWorkloadAttributesEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference">ApphubWorkloadAttributesEnvironmentOutputReference</a>

---

##### `OperatorOwners`<sup>Required</sup> <a name="OperatorOwners" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwners"></a>

```csharp
public ApphubWorkloadAttributesOperatorOwnersList OperatorOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList">ApphubWorkloadAttributesOperatorOwnersList</a>

---

##### `BusinessOwnersInput`<sup>Optional</sup> <a name="BusinessOwnersInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwnersInput"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesBusinessOwners[] BusinessOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners">ApphubWorkloadAttributesBusinessOwners</a>[]

---

##### `CriticalityInput`<sup>Optional</sup> <a name="CriticalityInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticalityInput"></a>

```csharp
public ApphubWorkloadAttributesCriticality CriticalityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

---

##### `DeveloperOwnersInput`<sup>Optional</sup> <a name="DeveloperOwnersInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwnersInput"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesDeveloperOwners[] DeveloperOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners">ApphubWorkloadAttributesDeveloperOwners</a>[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environmentInput"></a>

```csharp
public ApphubWorkloadAttributesEnvironment EnvironmentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

---

##### `OperatorOwnersInput`<sup>Optional</sup> <a name="OperatorOwnersInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwnersInput"></a>

```csharp
public IResolvable|ApphubWorkloadAttributesOperatorOwners[] OperatorOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners">ApphubWorkloadAttributesOperatorOwners</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

---


### ApphubWorkloadTimeoutsOutputReference <a name="ApphubWorkloadTimeoutsOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApphubWorkloadTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>

---


### ApphubWorkloadWorkloadPropertiesExtendedMetadataList <a name="ApphubWorkloadWorkloadPropertiesExtendedMetadataList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesExtendedMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.get"></a>

```csharp
private ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference <a name="ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList">ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadata">ApphubWorkloadWorkloadPropertiesExtendedMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.value"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList Value { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList">ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesExtendedMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadata">ApphubWorkloadWorkloadPropertiesExtendedMetadata</a>

---


### ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList <a name="ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.get"></a>

```csharp
private ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference <a name="ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.extendedMetadataSchema">ExtendedMetadataSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.metadataStruct">MetadataStruct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValue">ApphubWorkloadWorkloadPropertiesExtendedMetadataValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtendedMetadataSchema`<sup>Required</sup> <a name="ExtendedMetadataSchema" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.extendedMetadataSchema"></a>

```csharp
public string ExtendedMetadataSchema { get; }
```

- *Type:* string

---

##### `MetadataStruct`<sup>Required</sup> <a name="MetadataStruct" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.metadataStruct"></a>

```csharp
public string MetadataStruct { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValueOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesExtendedMetadataValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataValue">ApphubWorkloadWorkloadPropertiesExtendedMetadataValue</a>

---


### ApphubWorkloadWorkloadPropertiesFunctionalTypeList <a name="ApphubWorkloadWorkloadPropertiesFunctionalTypeList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesFunctionalTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.get"></a>

```csharp
private ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference <a name="ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalType">ApphubWorkloadWorkloadPropertiesFunctionalType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesFunctionalType InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalType">ApphubWorkloadWorkloadPropertiesFunctionalType</a>

---


### ApphubWorkloadWorkloadPropertiesIdentityList <a name="ApphubWorkloadWorkloadPropertiesIdentityList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.get"></a>

```csharp
private ApphubWorkloadWorkloadPropertiesIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApphubWorkloadWorkloadPropertiesIdentityOutputReference <a name="ApphubWorkloadWorkloadPropertiesIdentityOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentity">ApphubWorkloadWorkloadPropertiesIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentity">ApphubWorkloadWorkloadPropertiesIdentity</a>

---


### ApphubWorkloadWorkloadPropertiesList <a name="ApphubWorkloadWorkloadPropertiesList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get"></a>

```csharp
private ApphubWorkloadWorkloadPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApphubWorkloadWorkloadPropertiesOutputReference <a name="ApphubWorkloadWorkloadPropertiesOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.extendedMetadata">ExtendedMetadata</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList">ApphubWorkloadWorkloadPropertiesExtendedMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.functionalType">FunctionalType</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList">ApphubWorkloadWorkloadPropertiesFunctionalTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.gcpProject">GcpProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList">ApphubWorkloadWorkloadPropertiesIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties">ApphubWorkloadWorkloadProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtendedMetadata`<sup>Required</sup> <a name="ExtendedMetadata" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.extendedMetadata"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesExtendedMetadataList ExtendedMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesExtendedMetadataList">ApphubWorkloadWorkloadPropertiesExtendedMetadataList</a>

---

##### `FunctionalType`<sup>Required</sup> <a name="FunctionalType" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.functionalType"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesFunctionalTypeList FunctionalType { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesFunctionalTypeList">ApphubWorkloadWorkloadPropertiesFunctionalTypeList</a>

---

##### `GcpProject`<sup>Required</sup> <a name="GcpProject" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.gcpProject"></a>

```csharp
public string GcpProject { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.identity"></a>

```csharp
public ApphubWorkloadWorkloadPropertiesIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesIdentityList">ApphubWorkloadWorkloadPropertiesIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadWorkloadProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties">ApphubWorkloadWorkloadProperties</a>

---


### ApphubWorkloadWorkloadReferenceList <a name="ApphubWorkloadWorkloadReferenceList" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadReferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get"></a>

```csharp
private ApphubWorkloadWorkloadReferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApphubWorkloadWorkloadReferenceOutputReference <a name="ApphubWorkloadWorkloadReferenceOutputReference" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApphubWorkloadWorkloadReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference">ApphubWorkloadWorkloadReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.internalValue"></a>

```csharp
public ApphubWorkloadWorkloadReference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference">ApphubWorkloadWorkloadReference</a>

---



