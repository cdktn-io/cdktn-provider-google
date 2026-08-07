# `configDeployment` Submodule <a name="`configDeployment` Submodule" id="@cdktn/provider-google.configDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeployment <a name="ConfigDeployment" id="@cdktn/provider-google.configDeployment.ConfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment google_config_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeployment(Construct Scope, string Id, ConfigDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig">ConfigDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig">ConfigDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint">PutTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetArtifactsGcsBucket">ResetArtifactsGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetImportExistingResources">ResetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetQuotaValidation">ResetQuotaValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetTfVersionConstraint">ResetTfVersionConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.configDeployment.ConfigDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.configDeployment.ConfigDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.configDeployment.ConfigDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerraformBlueprint` <a name="PutTerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint"></a>

```csharp
private void PutTerraformBlueprint(ConfigDeploymentTerraformBlueprint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(ConfigDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetArtifactsGcsBucket` <a name="ResetArtifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetArtifactsGcsBucket"></a>

```csharp
private void ResetArtifactsGcsBucket()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportExistingResources` <a name="ResetImportExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetImportExistingResources"></a>

```csharp
private void ResetImportExistingResources()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQuotaValidation` <a name="ResetQuotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetQuotaValidation"></a>

```csharp
private void ResetQuotaValidation()
```

##### `ResetTfVersionConstraint` <a name="ResetTfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetTfVersionConstraint"></a>

```csharp
private void ResetTfVersionConstraint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetWorkerPool"></a>

```csharp
private void ResetWorkerPool()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ConfigDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ConfigDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ConfigDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ConfigDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.latestRevision">LatestRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprint">TerraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference">ConfigDeploymentTerraformBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference">ConfigDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucketInput">ArtifactsGcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResourcesInput">ImportExistingResourcesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidationInput">QuotaValidationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprintInput">TerraformBlueprintInput</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraintInput">TfVersionConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPoolInput">WorkerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucket">ArtifactsGcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResources">ImportExistingResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidation">QuotaValidation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraint">TfVersionConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPool">WorkerPool</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.latestRevision"></a>

```csharp
public string LatestRevision { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformBlueprint`<sup>Required</sup> <a name="TerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprint"></a>

```csharp
public ConfigDeploymentTerraformBlueprintOutputReference TerraformBlueprint { get; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference">ConfigDeploymentTerraformBlueprintOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeouts"></a>

```csharp
public ConfigDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference">ConfigDeploymentTimeoutsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ArtifactsGcsBucketInput`<sup>Optional</sup> <a name="ArtifactsGcsBucketInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucketInput"></a>

```csharp
public string ArtifactsGcsBucketInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportExistingResourcesInput`<sup>Optional</sup> <a name="ImportExistingResourcesInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResourcesInput"></a>

```csharp
public bool|IResolvable ImportExistingResourcesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QuotaValidationInput`<sup>Optional</sup> <a name="QuotaValidationInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidationInput"></a>

```csharp
public string QuotaValidationInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TerraformBlueprintInput`<sup>Optional</sup> <a name="TerraformBlueprintInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprintInput"></a>

```csharp
public ConfigDeploymentTerraformBlueprint TerraformBlueprintInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---

##### `TfVersionConstraintInput`<sup>Optional</sup> <a name="TfVersionConstraintInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraintInput"></a>

```csharp
public string TfVersionConstraintInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeoutsInput"></a>

```csharp
public IResolvable|ConfigDeploymentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPoolInput"></a>

```csharp
public string WorkerPoolInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ArtifactsGcsBucket`<sup>Required</sup> <a name="ArtifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucket"></a>

```csharp
public string ArtifactsGcsBucket { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportExistingResources`<sup>Required</sup> <a name="ImportExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResources"></a>

```csharp
public bool|IResolvable ImportExistingResources { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QuotaValidation`<sup>Required</sup> <a name="QuotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidation"></a>

```csharp
public string QuotaValidation { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `TfVersionConstraint`<sup>Required</sup> <a name="TfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraint"></a>

```csharp
public string TfVersionConstraint { get; }
```

- *Type:* string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPool"></a>

```csharp
public string WorkerPool { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeploymentConfig <a name="ConfigDeploymentConfig" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string ServiceAccount,
    ConfigDeploymentTerraformBlueprint TerraformBlueprint,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string ArtifactsGcsBucket = null,
    string DeletionPolicy = null,
    bool|IResolvable ForceDestroy = null,
    string Id = null,
    bool|IResolvable ImportExistingResources = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string QuotaValidation = null,
    string TfVersionConstraint = null,
    ConfigDeploymentTimeouts Timeouts = null,
    string WorkerPool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.name">Name</a></code> | <code>string</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.terraformBlueprint">TerraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.artifactsGcsBucket">ArtifactsGcsBucket</a></code> | <code>string</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#id ConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.importExistingResources">ImportExistingResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#project ConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.quotaValidation">QuotaValidation</a></code> | <code>string</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.tfVersionConstraint">TfVersionConstraint</a></code> | <code>string</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.workerPool">WorkerPool</a></code> | <code>string</code> | Custom Cloud Build worker pool resource name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#location ConfigDeployment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#name ConfigDeployment#name}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#service_account ConfigDeployment#service_account}

---

##### `TerraformBlueprint`<sup>Required</sup> <a name="TerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.terraformBlueprint"></a>

```csharp
public ConfigDeploymentTerraformBlueprint TerraformBlueprint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#terraform_blueprint ConfigDeployment#terraform_blueprint}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#annotations ConfigDeployment#annotations}

---

##### `ArtifactsGcsBucket`<sup>Optional</sup> <a name="ArtifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.artifactsGcsBucket"></a>

```csharp
public string ArtifactsGcsBucket { get; set; }
```

- *Type:* string

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#artifacts_gcs_bucket ConfigDeployment#artifacts_gcs_bucket}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#deletion_policy ConfigDeployment#deletion_policy}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#force_destroy ConfigDeployment#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#id ConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportExistingResources`<sup>Optional</sup> <a name="ImportExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.importExistingResources"></a>

```csharp
public bool|IResolvable ImportExistingResources { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#import_existing_resources ConfigDeployment#import_existing_resources}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#labels ConfigDeployment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#project ConfigDeployment#project}.

---

##### `QuotaValidation`<sup>Optional</sup> <a name="QuotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.quotaValidation"></a>

```csharp
public string QuotaValidation { get; set; }
```

- *Type:* string

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#quota_validation ConfigDeployment#quota_validation}

---

##### `TfVersionConstraint`<sup>Optional</sup> <a name="TfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.tfVersionConstraint"></a>

```csharp
public string TfVersionConstraint { get; set; }
```

- *Type:* string

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#tf_version_constraint ConfigDeployment#tf_version_constraint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.timeouts"></a>

```csharp
public ConfigDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#timeouts ConfigDeployment#timeouts}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.workerPool"></a>

```csharp
public string WorkerPool { get; set; }
```

- *Type:* string

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#worker_pool ConfigDeployment#worker_pool}

---

### ConfigDeploymentTerraformBlueprint <a name="ConfigDeploymentTerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTerraformBlueprint {
    string GcsSource = null,
    ConfigDeploymentTerraformBlueprintGitSource GitSource = null,
    IResolvable|ConfigDeploymentTerraformBlueprintInputValues[] InputValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gcsSource">GcsSource</a></code> | <code>string</code> | URI of a GCS object containing the zipped Terraform blueprint. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | git_source block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.inputValues">InputValues</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>[]</code> | input_values block. |

---

##### `GcsSource`<sup>Optional</sup> <a name="GcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gcsSource"></a>

```csharp
public string GcsSource { get; set; }
```

- *Type:* string

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#gcs_source ConfigDeployment#gcs_source}

---

##### `GitSource`<sup>Optional</sup> <a name="GitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gitSource"></a>

```csharp
public ConfigDeploymentTerraformBlueprintGitSource GitSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#git_source ConfigDeployment#git_source}

---

##### `InputValues`<sup>Optional</sup> <a name="InputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.inputValues"></a>

```csharp
public IResolvable|ConfigDeploymentTerraformBlueprintInputValues[] InputValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>[]

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#input_values ConfigDeployment#input_values}

---

### ConfigDeploymentTerraformBlueprintGitSource <a name="ConfigDeploymentTerraformBlueprintGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTerraformBlueprintGitSource {
    string Repo,
    string Directory = null,
    string Ref = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.repo">Repo</a></code> | <code>string</code> | Repository URL. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.directory">Directory</a></code> | <code>string</code> | Subdirectory within the repo. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.ref">Ref</a></code> | <code>string</code> | Git reference (branch or tag). |

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#repo ConfigDeployment#repo}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#directory ConfigDeployment#directory}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#ref ConfigDeployment#ref}

---

### ConfigDeploymentTerraformBlueprintInputValues <a name="ConfigDeploymentTerraformBlueprintInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTerraformBlueprintInputValues {
    string InputValue,
    string VariableName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.inputValue">InputValue</a></code> | <code>string</code> | The value of the variable. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.variableName">VariableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}. |

---

##### `InputValue`<sup>Required</sup> <a name="InputValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.inputValue"></a>

```csharp
public string InputValue { get; set; }
```

- *Type:* string

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#input_value ConfigDeployment#input_value}

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.variableName"></a>

```csharp
public string VariableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}.

---

### ConfigDeploymentTimeouts <a name="ConfigDeploymentTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#create ConfigDeployment#create}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#delete ConfigDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#update ConfigDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#create ConfigDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#delete ConfigDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/config_deployment#update ConfigDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeploymentTerraformBlueprintGitSourceOutputReference <a name="ConfigDeploymentTerraformBlueprintGitSourceOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTerraformBlueprintGitSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef">ResetRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue"></a>

```csharp
public ConfigDeploymentTerraformBlueprintGitSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---


### ConfigDeploymentTerraformBlueprintInputValuesList <a name="ConfigDeploymentTerraformBlueprintInputValuesList" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTerraformBlueprintInputValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get"></a>

```csharp
private ConfigDeploymentTerraformBlueprintInputValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue"></a>

```csharp
public IResolvable|ConfigDeploymentTerraformBlueprintInputValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>[]

---


### ConfigDeploymentTerraformBlueprintInputValuesOutputReference <a name="ConfigDeploymentTerraformBlueprintInputValuesOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTerraformBlueprintInputValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput">InputValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput">VariableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue">InputValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName">VariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputValueInput`<sup>Optional</sup> <a name="InputValueInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput"></a>

```csharp
public string InputValueInput { get; }
```

- *Type:* string

---

##### `VariableNameInput`<sup>Optional</sup> <a name="VariableNameInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput"></a>

```csharp
public string VariableNameInput { get; }
```

- *Type:* string

---

##### `InputValue`<sup>Required</sup> <a name="InputValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue"></a>

```csharp
public string InputValue { get; }
```

- *Type:* string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName"></a>

```csharp
public string VariableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigDeploymentTerraformBlueprintInputValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>

---


### ConfigDeploymentTerraformBlueprintOutputReference <a name="ConfigDeploymentTerraformBlueprintOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTerraformBlueprintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource">PutGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues">PutInputValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource">ResetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGitSource">ResetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetInputValues">ResetInputValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitSource` <a name="PutGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource"></a>

```csharp
private void PutGitSource(ConfigDeploymentTerraformBlueprintGitSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `PutInputValues` <a name="PutInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues"></a>

```csharp
private void PutInputValues(IResolvable|ConfigDeploymentTerraformBlueprintInputValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>[]

---

##### `ResetGcsSource` <a name="ResetGcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource"></a>

```csharp
private void ResetGcsSource()
```

##### `ResetGitSource` <a name="ResetGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGitSource"></a>

```csharp
private void ResetGitSource()
```

##### `ResetInputValues` <a name="ResetInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetInputValues"></a>

```csharp
private void ResetInputValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference">ConfigDeploymentTerraformBlueprintGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValues">InputValues</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList">ConfigDeploymentTerraformBlueprintInputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput">GcsSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput">GitSourceInput</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput">InputValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource">GcsSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitSource`<sup>Required</sup> <a name="GitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSource"></a>

```csharp
public ConfigDeploymentTerraformBlueprintGitSourceOutputReference GitSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference">ConfigDeploymentTerraformBlueprintGitSourceOutputReference</a>

---

##### `InputValues`<sup>Required</sup> <a name="InputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValues"></a>

```csharp
public ConfigDeploymentTerraformBlueprintInputValuesList InputValues { get; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList">ConfigDeploymentTerraformBlueprintInputValuesList</a>

---

##### `GcsSourceInput`<sup>Optional</sup> <a name="GcsSourceInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput"></a>

```csharp
public string GcsSourceInput { get; }
```

- *Type:* string

---

##### `GitSourceInput`<sup>Optional</sup> <a name="GitSourceInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput"></a>

```csharp
public ConfigDeploymentTerraformBlueprintGitSource GitSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `InputValuesInput`<sup>Optional</sup> <a name="InputValuesInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput"></a>

```csharp
public IResolvable|ConfigDeploymentTerraformBlueprintInputValues[] InputValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>[]

---

##### `GcsSource`<sup>Required</sup> <a name="GcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource"></a>

```csharp
public string GcsSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.internalValue"></a>

```csharp
public ConfigDeploymentTerraformBlueprint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---


### ConfigDeploymentTimeoutsOutputReference <a name="ConfigDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ConfigDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigDeploymentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---



